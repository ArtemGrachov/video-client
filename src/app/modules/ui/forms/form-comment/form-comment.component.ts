import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EStatus } from 'src/app/constants/status';

import { ICreateCommentPayload } from 'src/app/types/api/comments-api.interface';
import { IComment } from 'src/app/types/models/comment.interface';

@Component({
  selector: 'app-form-comment',
  templateUrl: './form-comment.component.html',
  styleUrls: ['./form-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormCommentComponent {
  @Input()
  public comment?: IComment | null;

  @Input('submitStatus')
  public submitStatus: EStatus | null = EStatus.INIT;

  @Input('submitError')
  public submitError: any = null;

  @Output('formSubmit')
  private submitEmitter: EventEmitter<ICreateCommentPayload> = new EventEmitter()

  public get submitProcessing(): boolean {
    return this.submitStatus === EStatus.PROCESSING;
  }

  public form: FormGroup = new FormGroup({
    content: new FormControl('', [Validators.required]),
  });

  public submitHandler(): void {
    if (this.form.invalid || this.submitProcessing) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitEmitter.next(this.form.value);
  }

  public ngOnInit(): void {
    if (this.comment) {
      this.fillForm(this.comment);
    }
  }

  public fillForm(comment: IComment): void {
    this.form.setValue(
      { content: comment.content },
      { emitEvent: false }
    );
  }
}
