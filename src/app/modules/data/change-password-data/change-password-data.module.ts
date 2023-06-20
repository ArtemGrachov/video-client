import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthApiModule } from '../auth-api/auth-api.module';

import { ChangePasswordDataService } from './services/change-password-data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthApiModule,
  ],
  providers: [
    ChangePasswordDataService,
  ],
})
export class ChangePasswordDataModule { }
