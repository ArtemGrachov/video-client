import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EStatus } from 'src/app/constants/status';
import { PASSWORD_REG_EXP, matchValidatorFactory } from 'src/app/modules/utils/other/validators';

import { IRegistrationRequestPayload } from 'src/app/types/api/auth-api.interface';
import { IDictionary } from 'src/app/types/other/dictionary.interface';
import { ValidationMessageFactory } from 'src/app/types/other/validation.types';

@Component({
  selector: 'app-form-registration',
  templateUrl: './form-registration.component.html',
  styleUrls: ['./form-registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormRegistrationComponent {
  @Input('submitStatus')
  public submitStatus: EStatus | null = EStatus.INIT;

  @Input('submitError')
  public submitError: any = null;

  @Output('formSubmit')
  private submitEmitter: EventEmitter<IRegistrationRequestPayload> = new EventEmitter();

  public get submitProcessing(): boolean {
    return this.submitStatus === EStatus.PROCESSING;
  }

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
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
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

  public passwordValidationMessages: IDictionary<ValidationMessageFactory> = {
    pattern: () => 'One digit, one lowercase and one uppercase symbols'
  };
}
