import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EStatus } from 'src/app/constants/status';

import { ICreatePlaylistPayload } from 'src/app/types/api/playlist-api.interface';

@Component({
  selector: 'app-form-playlist',
  templateUrl: './form-playlist.component.html',
  styleUrls: ['./form-playlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormPlaylistComponent {
  @Input('submitStatus')
  public submitStatus: EStatus | null = EStatus.INIT;

  @Input('submitError')
  public submitError: any = null;

  @Output('formSubmit')
  private submitEmitter: EventEmitter<ICreatePlaylistPayload> = new EventEmitter();

  public get submitProcessing(): boolean {
    return this.submitStatus === EStatus.PROCESSING;
  }

  public form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  public submitHandler(): void {
    if (this.form.invalid || this.submitProcessing) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitEmitter.next(this.form.value);
  }
}
