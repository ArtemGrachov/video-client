import { AbstractControl } from '@angular/forms';

export const PASSWORD_REG_EXP: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).*$/

export function matchValidatorFactory(matchCotnrol: AbstractControl) {
  return (control: AbstractControl) => {
    if (control.value !== matchCotnrol.value) {
      return { match: true };
    }

    return null;
  };
}
