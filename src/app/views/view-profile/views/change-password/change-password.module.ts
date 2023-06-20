import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormChangePasswordModule } from 'src/app/modules/ui/forms/form-change-password/form-change-password.module';
import { ChangePasswordDataModule } from 'src/app/modules/data/change-password-data/change-password-data.module';

import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordComponent } from './change-password.component';

@NgModule({
  declarations: [
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    ChangePasswordRoutingModule,
    FormChangePasswordModule,
    ChangePasswordDataModule,
  ],
})
export class ChangePasswordModule { }
