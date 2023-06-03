import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlClientErrorModule } from '../control-client-error/control-client-error.module';

import { FormControlComponent } from './form-control.component';

@NgModule({
  declarations: [
    FormControlComponent
  ],
  imports: [
    CommonModule,
    ControlClientErrorModule
  ],
  exports: [
    FormControlComponent
  ]
})
export class FormControlModule { }
