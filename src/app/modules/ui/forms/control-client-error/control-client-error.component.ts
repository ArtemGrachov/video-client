import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable, map, of, startWith } from 'rxjs';

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

  private getErrorText(): string | null {
    if (!this.control?.errors) {
      return null;
    }

    if (this.control.errors['required']) {
      return 'This field is required';
    }

    if (this.control.errors['email']) {
      return 'This field should have email format';
    }

    return null
  }
}
