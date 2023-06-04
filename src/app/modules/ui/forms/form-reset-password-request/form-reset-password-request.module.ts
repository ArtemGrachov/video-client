import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormControlModule } from '../form-control/form-control.module';
import { FormServerErrorModule } from '../form-server-error/form-server-error.module';

import { FormResetPasswordRequestComponent } from './form-reset-password-request.component';

@NgModule({
  declarations: [
    FormResetPasswordRequestComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormControlModule,
    FormServerErrorModule,
  ],
  exports: [
    FormResetPasswordRequestComponent,
  ],
})
export class FormResetPasswordRequestModule { }
