import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSearchComponent implements OnChanges {
  @Input()
  public query?: string | null;

  @Output('formSubmit')
  private submitEmitter: EventEmitter<string> = new EventEmitter();

  public form: FormGroup = new FormGroup({
    query: new FormControl(''),
  });

  public ngOnChanges(changes: SimpleChanges): void {
    const query = changes['query'].currentValue;

    this.form.patchValue({ query });
  }

  public submitHandler(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitEmitter.next(this.form.value.query);
  }
}
