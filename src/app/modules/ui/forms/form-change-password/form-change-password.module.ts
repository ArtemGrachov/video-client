import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormControlModule } from '../form-control/form-control.module';
import { FormServerErrorModule } from '../form-server-error/form-server-error.module';

import { FormChangePasswordComponent } from './form-change-password.component';

@NgModule({
  declarations: [
    FormChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormControlModule,
    FormServerErrorModule,
  ],
  exports: [
    FormChangePasswordComponent,
  ]
})
export class FormChangePasswordModule { }
