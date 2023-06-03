import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent {
  @Input('control')
  public control?: AbstractControl<any, any> | null;

  @Input('selector')
  public selector?: string

  @Input('serverError')
  public serverError?: any

  public get showValidationErrors(): boolean {
    return (this.control?.touched && this.control?.invalid) ?? false;
  }
}
