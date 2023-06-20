import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EStatus } from 'src/app/constants/status';

import { IUpdateUserPayload } from 'src/app/types/api/users-api.interface';

@Component({
  selector: 'app-form-profile',
  templateUrl: './form-profile.component.html',
  styleUrls: ['./form-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormProfileComponent {
  @Input('submitStatus')
  public submitStatus: EStatus | null = EStatus.INIT;

  @Input('submitError')
  public submitError: any = null;

  @Output('formSubmit')
  private submitEmitter: EventEmitter<IUpdateUserPayload> = new EventEmitter()

  public get submitProcessing(): boolean {
    return this.submitStatus === EStatus.PROCESSING;
  }

  public form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email]),
    name: new FormControl(''),
    avatar: new FormControl(null),
  });

  public submitHandler(): void {
    if (this.form.invalid || this.submitProcessing) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitEmitter.next(this.form.value);
  }
}
