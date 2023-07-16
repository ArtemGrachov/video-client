import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { L10nTranslationService } from 'angular-l10n';
import { BehaviorSubject, EMPTY, Observable, combineLatest, map, startWith } from 'rxjs';

import { IDictionary } from 'src/app/types/other/dictionary.interface';
import { ValidationMessageFactory } from 'src/app/types/other/validation.types';

@Component({
  selector: 'app-control-client-error',
  templateUrl: './control-client-error.component.html',
  styleUrls: ['./control-client-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlClientErrorComponent implements OnChanges {
  @Input()
  public control?: AbstractControl<any, any> | null;

  @Input('customErrorMessages')
  public customErrorMessages?: IDictionary<ValidationMessageFactory> | null;

  private control$: BehaviorSubject<AbstractControl<any, any> | null> = new BehaviorSubject(this.control ?? null);

  constructor(private translationService: L10nTranslationService) {}

  private errorMessageMap$: Observable<IDictionary<ValidationMessageFactory>> = this
    .translationService
    .onChange()
    .pipe(map(() => {
      return {
        required: () => this.translationService.translate('control_client_error.validation_required'),
        pattern: () => this.translationService.translate('control_client_error.validation_format'),
        match: () => this.translationService.translate('control_client_error.validation_match'),
        email: () => this.translationService.translate('control_client_error.validation_email'),
        minlength: (
          { requiredLength, actualLength }:
          { requiredLength: number, actualLength: number }
        ) => this.translationService.translate('control_client_error.validation_length', { requiredLength }),
      };
    }))

  public ngOnChanges(changes: SimpleChanges): void {
    const newControl: AbstractControl<any, any> | undefined = changes['control']?.currentValue

    if (newControl) {
      this.control$.next(newControl);
    }
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

  public validationMessage$: Observable<string | null> = combineLatest([
    this.control$,
    this.mergedErrorMessages$,
  ])
    .pipe(map(([control, mergedErrorMessages]) => {
      if (!control?.errors) {
        return null;
      }

      const key = Object.keys(control.errors)[0];

      if (!key) {
        return null;
      }

      const message = mergedErrorMessages[key];

      if (!message) {
        return null;
      }

      return message(control.errors[key]);
    }))
}
