import { NgModule } from '@angular/core';
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
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
    SharedModule,
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
