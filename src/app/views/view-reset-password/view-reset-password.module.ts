import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L10nTranslationModule } from 'angular-l10n';

import { FormResetPasswordModule } from 'src/app/modules/ui/forms/form-reset-password/form-reset-password.module';
import { ResetPasswordDataService } from 'src/app/services/reset-password-data/reset-password-data.service';
import { AuthApiService } from 'src/app/services/auth-api/auth-api.service';

import { ViewResetPasswordRoutingModule } from './view-reset-password-routing.module';
import { ViewResetPasswordComponent } from './view-reset-password.component';

@NgModule({
  declarations: [
    ViewResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    ViewResetPasswordRoutingModule,
    FormResetPasswordModule,
    L10nTranslationModule,
  ],
  providers: [
    ResetPasswordDataService,
    AuthApiService,
  ]
})
export class ViewResetPasswordModule { }
