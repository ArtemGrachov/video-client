import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EStatus } from 'src/app/constants/status';

import { IDictionary } from 'src/app/types/other/dictionary.interface';
import { ValidationMessageFactory } from 'src/app/types/other/validation.types';
import { IChangePasswordPayload } from 'src/app/types/api/auth-api.interface';

import { PASSWORD_REG_EXP, matchValidatorFactory } from 'src/app/modules/utils/other/validators';

@Component({
  selector: 'app-form-change-password',
  templateUrl: './form-change-password.component.html',
  styleUrls: ['./form-change-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormChangePasswordComponent implements OnChanges {
  @Input('submitStatus')
  public submitStatus: EStatus | null = EStatus.INIT;

  @Input('submitError')
  public submitError: any = null;

  @Output('formSubmit')
  private submitEmitter: EventEmitter<IChangePasswordPayload> = new EventEmitter();

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
    password: this.controlPassword,
    passwordConfirmation: this.controlPasswordConfirmation
  });

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['submitStatus']?.currentValue === EStatus.SUCCESS) {
      this.form.reset({
        password: '',
        passwordConfirmation: '',
      });
    }
  }

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
