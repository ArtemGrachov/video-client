import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormServerErrorModule } from '../form-server-error/form-server-error.module';
import { FormControlModule } from '../form-control/form-control.module';

import { FormResetPasswordComponent } from './form-reset-password.component';

@NgModule({
  declarations: [
    FormResetPasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormControlModule,
    FormServerErrorModule,
  ],
  exports: [
    FormResetPasswordComponent
  ],
})
export class FormResetPasswordModule { }
