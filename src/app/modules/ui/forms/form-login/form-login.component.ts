import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ILoginRequestPayload } from 'src/app/types/api/auth-api.interface';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormLoginComponent {
  @Output('formSubmit')
  private submitEmitter: EventEmitter<ILoginRequestPayload> = new EventEmitter()

  public form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  public submitHandler(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitEmitter.next(this.form.value);
  }
}
