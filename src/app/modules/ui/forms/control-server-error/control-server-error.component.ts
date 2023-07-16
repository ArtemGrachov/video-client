import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { L10nTranslationService } from 'angular-l10n';
import { Observable, map } from 'rxjs';

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

  private errorMessageMap$: Observable<IDictionary<ValidationMessageFactory>> = this
    .translationService
    .onChange()
    .pipe(map(() => {
      return {
        [EValidationFieldErrors.REQUIRED]: () => this.translationService.translate('control_server_error.validation_required'),
        [EValidationFieldErrors.NOT_EMAIL]: () => this.translationService.translate('control_server_error.validation_email'),
        [EValidationFieldErrors.FORMAT]: () => this.translationService.translate('control_server_error.validation_format'),
        [EValidationFieldErrors.PASSWORDS_ARE_NOT_EQUAL]: () => this.translationService.translate('control_server_error.validation_match'),
        [EValidationFieldErrors.MIN_LENGTH]: (
          { length }: { length: number }
        ) => this.translationService.translate('control_server_error.validation_min_length', { length }),
        [EValidationFieldErrors.UNIQUE]: () => this.translationService.translate('control_server_error.validation_unique'),
      };
    }))

  constructor(
    private serverValidationService: ServerValidationService,
    private translationService: L10nTranslationService,
  ) {}

  private get fieldErrors(): IServerFieldValidations[] {
    return this.serverValidationService.getServerFormFieldValidation(this.selector, this.error);
  }


  private mergedErrorMessages$: Observable<IDictionary<ValidationMessageFactory>> = this
    .errorMessageMap$
    .pipe(map(errorMessageMap => {
      if (!this.customErrorMessages) {
        return errorMessageMap;
      }

      return {
        ...errorMessageMap,
        ...this.customErrorMessages,
      };
    }));

    public formattedMessages$: Observable<string[]> = this
      .mergedErrorMessages$
      .pipe(
        map(
          (messages) => this.fieldErrors
            .map(err => this.getFormattedMessage(messages, err))
            .filter(m => Boolean(m)) as string[]
        ),
      );

  public getFormattedMessage(
    errorMessages: IDictionary<ValidationMessageFactory>,
    validation: IServerFieldValidations,
  ): string | null {
    const handler = errorMessages[validation.rule];

    if (!handler) {
      return null;
    }

    return handler(validation.data);
  }
}
