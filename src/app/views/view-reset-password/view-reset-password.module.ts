import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormResetPasswordModule } from 'src/app/modules/ui/forms/form-reset-password/form-reset-password.module';
import { ResetPasswordDataModule } from 'src/app/modules/data/reset-password-data/reset-password-data.module';

import { ViewResetPasswordRoutingModule } from './view-reset-password-routing.module';
import { ViewResetPasswordComponent } from './view-reset-password.component';

@NgModule({
  declarations: [
    ViewResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    ViewResetPasswordRoutingModule,
    ResetPasswordDataModule,
    FormResetPasswordModule,
  ],
})
export class ViewResetPasswordModule { }
