import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable, map, of, startWith } from 'rxjs';

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

  public validationMessage$: Observable<string | null> = of(null);

  @Input('customErrorMessages')
  public customErrorMessages?: IDictionary<ValidationMessageFactory> | null;

  private errorMessageMap: IDictionary<ValidationMessageFactory> = {
    required: () => 'This field is required',
    pattern: () => 'This field has incorrect format',
    match: () => 'Fields do not match',
    email: () => 'This filed should have email format',
    minlength: (
      { requiredLength, actualLength }:
      { requiredLength: number, actualLength: number }
    ) => `This field should have ${requiredLength} symbols`
  };

  public ngOnChanges(changes: SimpleChanges): void {
    const newControl: AbstractControl<any, any> | undefined = changes['control']?.currentValue

    if (newControl) {
      this.validationMessage$ = newControl
        .valueChanges
        .pipe(
          startWith(this.getErrorText()),
          map(() => this.getErrorText())
        )
    }
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

  private getErrorText(): string | null {
    if (!this.control?.errors) {
      return null;
    }

    const key = Object.keys(this.control.errors)[0];

    if (!key) {
      return null;
    }

    const message = this.mergedErrorMessages[key];

    if (!message) {
      return null;
    }

    return message(this.control.errors[key]);
  }
}
