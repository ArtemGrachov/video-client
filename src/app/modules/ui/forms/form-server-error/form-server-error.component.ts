import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EServerErrors } from 'src/app/constants/errors';

import { ServerValidationService } from 'src/app/modules/utils/form-validation/services/server-validation.service';
import { IDictionary } from 'src/app/types/other/dictionary.interface';

@Component({
  selector: 'app-form-server-error',
  templateUrl: './form-server-error.component.html',
  styleUrls: ['./form-server-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormServerErrorComponent {
  @Input('error')
  public error?: any;

  @Input('customErrorMessages')
  public customErrorMessages?: IDictionary<string> | null;

  private errorMessageMap: IDictionary<string> = {
    [EServerErrors.VALIDATION]: 'Form is not valid',
    [EServerErrors.INCORRECT_EMAIL_OR_PASSWORD]: 'Incorrect email or password',
    [EServerErrors.INVALID_RESET_PASSWORD_TOKEN]: 'Invalid reset password token',
    [EServerErrors.NOT_AUTHENTICATED]: 'Not authenticated',
    [EServerErrors.SERVER_ERROR]: 'Server error',
    [EServerErrors.NOT_FOUND]: 'Not found',
    [EServerErrors.NOT_ALLOWED]: 'Not authorized',
  };

  constructor(private serverValidationService: ServerValidationService) {}

  public get message(): string | null {
    return this.serverValidationService.getServerFormErrorMessage(this.error);
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

  public get formattedMessage(): string | null {
    if (!this.message) {
      return null
    }

    return this.mergedErrorMessages[this.message];
  }
}
