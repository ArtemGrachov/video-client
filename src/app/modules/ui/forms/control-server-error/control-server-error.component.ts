import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { EValidationFieldErrors } from 'src/app/constants/validations';

import { ServerValidationService } from 'src/app/modules/utils/form-validation/services/server-validation.service';
import { IServerFieldValidations } from 'src/app/types/api/server-validation.interface';

import { IDictionary } from 'src/app/types/other/dictionary.interface';

@Component({
  selector: 'app-control-server-error',
  templateUrl: './control-server-error.component.html',
  styleUrls: ['./control-server-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlServerErrorComponent {
  @Input()
  public error?: any;

  @Input()
  public selector?: string;

  @Input('customErrorMessages')
  public customErrorMessages?: IDictionary<string> | null;

  private errorMessageMap: IDictionary<string> = {
    [EValidationFieldErrors.REQUIRED]: 'This field is required',
    [EValidationFieldErrors.NOT_EMAIL]: 'This field should have email format',
    [EValidationFieldErrors.FORMAT]: 'This field has incorrect format',
    [EValidationFieldErrors.PASSWORDS_ARE_NOT_EQUAL]: 'Passwords are not equal',
    [EValidationFieldErrors.MIN_LENGTH]: 'This field should have at least {length} symbols',
  };

  constructor(private serverValidationService: ServerValidationService) {}

  private get fieldErrors(): IServerFieldValidations[] {
    return this.serverValidationService.getServerFormFieldValidation(this.selector, this.error);
  }

  public get formattedMessages(): string[] {
    return this.fieldErrors.map(err => this.getFormattedMessage(err));
  }

  private get mergedErrorMessages(): IDictionary<string> {
    if (!this.customErrorMessages) {
      return this.errorMessageMap;
    }

    return {
      ...this.errorMessageMap,
      ...this.customErrorMessages,
    };
  }

  public getFormattedMessage(validation: IServerFieldValidations): string {
    return this.mergedErrorMessages[validation.rule];
  }
}
