import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { L10nTranslationService } from 'angular-l10n';
import { Observable, map } from 'rxjs';

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

  private errorMessageMap$: Observable<IDictionary<string>> = this
    .translationService
    .onChange()
    .pipe(map(() => {
      return {
          [EServerErrors.VALIDATION]: this.translationService.translate('form_server_error.error_validation'),
          [EServerErrors.INCORRECT_EMAIL_OR_PASSWORD]: this.translationService.translate('form_server_error.error_incorrect_email_or_password'),
          [EServerErrors.INVALID_RESET_PASSWORD_TOKEN]: this.translationService.translate('form_server_error.error_invalid_reset_password_token'),
          [EServerErrors.NOT_AUTHENTICATED]: this.translationService.translate('form_server_error.error_not_authenticated'),
          [EServerErrors.SERVER_ERROR]: this.translationService.translate('form_server_error.error_server_error'),
          [EServerErrors.NOT_FOUND]: this.translationService.translate('form_server_error.error_not_found'),
          [EServerErrors.NOT_ALLOWED]: this.translationService.translate('form_server_error.error_not_authorized'),
        };
    }))

  constructor(
    private serverValidationService: ServerValidationService,
    private translationService: L10nTranslationService,
  ) {}

  public get message(): string | null {
    return this.serverValidationService.getServerFormErrorMessage(this.error);
  }

  private mergedErrorMessages$: Observable<IDictionary<string>> = this
    .errorMessageMap$
    .pipe(
      map(errorMessageMap => {
        if (!this.customErrorMessages) {
          return errorMessageMap;
        }

        return {
          ...errorMessageMap,
          ...this.customErrorMessages,
        };
      })
    );

  public formattedMessage$: Observable<string | null> = this
    .mergedErrorMessages$
    .pipe(
      map(mergedErrorMessages => {
        if (!this.message) {
          return null
        }

        return mergedErrorMessages[this.message];
      })
    );
}
