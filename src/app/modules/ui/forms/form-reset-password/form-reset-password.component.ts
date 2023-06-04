import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EStatus } from 'src/app/constants/status';

import { IResetPasswordPayload } from 'src/app/types/api/auth-api.interface';
import { IDictionary } from 'src/app/types/other/dictionary.interface';
import { ValidationMessageFactory } from 'src/app/types/other/validation.types';

import { PASSWORD_REG_EXP, matchValidatorFactory } from 'src/app/modules/utils/other/validators';

@Component({
  selector: 'app-form-reset-password',
  templateUrl: './form-reset-password.component.html',
  styleUrls: ['./form-reset-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormResetPasswordComponent {
  @Input('submitStatus')
  public submitStatus: EStatus | null = EStatus.INIT;

  @Input('submitError')
  public submitError: any = null;

  @Output('formSubmit')
  private submitEmitter: EventEmitter<IResetPasswordPayload> = new EventEmitter();

  public get submitProcessing(): boolean {
    return this.submitStatus === EStatus.PROCESSING;
  }

  public passwordValidationMessages: IDictionary<ValidationMessageFactory> = {
    pattern: () => 'One digit, one lowercase and one uppercase symbols'
  };

  private controlPassword = new FormControl(
    '',
    [
      Validators.required,
      Validators.pattern(PASSWORD_REG_EXP),
      Validators.minLength(8),
    ]
  );

  private controlPasswordConfirmation = new FormControl(
    '',
    [
      Validators.required,
      matchValidatorFactory(this.controlPassword)
    ]
  );

  public form: FormGroup = new FormGroup({
    password: this.controlPassword,
    passwordConfirmation: this.controlPasswordConfirmation
  });

  public submitHandler(): void {
    if (this.form.invalid || this.submitProcessing) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitEmitter.next(this.form.value);
  }
}
