import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { EValidationFieldErrors } from 'src/app/constants/validations';

import { ServerValidationService } from 'src/app/modules/utils/form-validation/services/server-validation.service';
import { IServerFieldValidations } from 'src/app/types/api/server-validation.interface';

import { IDictionary } from 'src/app/types/other/dictionary.interface';
import { ValidationMessageFactory } from 'src/app/types/other/validation.types';

@Component({
  selector: 'app-control-server-error',
  templateUrl: './control-server-error.component.html',
  styleUrls: ['./control-server-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlServerErrorComponent {
  @Input()
  public error?: any;

  @Input()
  public selector?: string;

  @Input('customErrorMessages')
  public customErrorMessages?: IDictionary<ValidationMessageFactory> | null;

  private errorMessageMap: IDictionary<ValidationMessageFactory> = {
    [EValidationFieldErrors.REQUIRED]: () => 'This field is required',
    [EValidationFieldErrors.NOT_EMAIL]: () => 'This field should have email format',
    [EValidationFieldErrors.FORMAT]: () => 'This field has incorrect format',
    [EValidationFieldErrors.PASSWORDS_ARE_NOT_EQUAL]: () => 'Passwords are not equal',
    [EValidationFieldErrors.MIN_LENGTH]: ({ length }: { length: number }) => `This field should have at least ${length} symbols`,
    [EValidationFieldErrors.UNIQUE]: () => 'This field is not unique',
  };

  constructor(private serverValidationService: ServerValidationService) {}

  private get fieldErrors(): IServerFieldValidations[] {
    return this.serverValidationService.getServerFormFieldValidation(this.selector, this.error);
  }

  public get formattedMessages(): string[] {
    return this.fieldErrors
      .map(err => this.getFormattedMessage(err))
      .filter(m => Boolean(m)) as string[];
  }

  private get mergedErrorMessages(): IDictionary<ValidationMessageFactory> {
    if (!this.customErrorMessages) {
      return this.errorMessageMap;
    }

    return {
      ...this.errorMessageMap,
      ...this.customErrorMessages,
    };
  }

  public getFormattedMessage(validation: IServerFieldValidations): string | null {
    const handler = this.mergedErrorMessages[validation.rule];

    if (!handler) {
      return null;
    }

    return handler(validation.data);
  }
}
