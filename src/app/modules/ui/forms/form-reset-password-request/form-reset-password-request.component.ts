import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EStatus } from 'src/app/constants/status';
import { IResetPasswordRequestPayload } from 'src/app/types/api/auth-api.interface';

@Component({
  selector: 'app-form-reset-password-request',
  templateUrl: './form-reset-password-request.component.html',
  styleUrls: ['./form-reset-password-request.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormResetPasswordRequestComponent {
  @Input('submitStatus')
  public submitStatus: EStatus | null = EStatus.INIT;

  @Input('submitError')
  public submitError: any = null;

  @Output('formSubmit')
  private submitEmitter: EventEmitter<IResetPasswordRequestPayload> = new EventEmitter();

  public get submitProcessing(): boolean {
    return this.submitStatus === EStatus.PROCESSING;
  }

  public form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  public submitHandler(): void {
    if (this.form.invalid || this.submitProcessing) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitEmitter.next(this.form.value);
  }
}
