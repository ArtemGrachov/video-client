import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormValidationModule } from 'src/app/modules/utils/form-validation/form-validation.module';

import { ControlServerErrorComponent } from './control-server-error.component';

@NgModule({
  declarations: [
    ControlServerErrorComponent
  ],
  imports: [
    CommonModule,
    FormValidationModule,
  ],
  exports: [
    ControlServerErrorComponent
  ]
})
export class ControlServerErrorModule { }
