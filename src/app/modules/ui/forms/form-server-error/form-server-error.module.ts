import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormValidationModule } from 'src/app/modules/utils/form-validation/form-validation.module';

import { FormServerErrorComponent } from './form-server-error.component';

@NgModule({
  declarations: [
    FormServerErrorComponent
  ],
  imports: [
    CommonModule,
    FormValidationModule,
  ],
  exports: [
    FormServerErrorComponent
  ]
})
export class FormServerErrorModule { }
