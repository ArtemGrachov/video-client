import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormValidationModule } from 'src/app/modules/utils/form-validation/form-validation.module';

import { FormServerErrorModule } from '../form-server-error/form-server-error.module';
import { FormControlModule } from '../form-control/form-control.module';
import { FormLoginComponent } from './form-login.component';

@NgModule({
  declarations: [
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormControlModule,
    FormValidationModule,
    FormServerErrorModule
  ],
  exports: [
    FormLoginComponent
  ]
})
export class FormLoginModule { }
