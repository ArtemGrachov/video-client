import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { IDictionary } from 'src/app/types/other/dictionary.interface';
import { ValidationMessageFactory } from 'src/app/types/other/validation.types';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent {
  @Input('control')
  public control?: AbstractControl<any, any> | null;

  @Input('selector')
  public selector?: string;

  @Input('serverError')
  public serverError?: any;

  @Input('customClientErrorMessages')
  public customClientErrorMessages?: IDictionary<ValidationMessageFactory> | null;

  @Input('customServerErrorMessages')
  public customServerErrorMessages?: IDictionary<ValidationMessageFactory> | null;

  public get showValidationErrors(): boolean {
    return (this.control?.touched && this.control?.invalid) ?? false;
  }
}
