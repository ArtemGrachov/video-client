import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L10nTranslationModule } from 'angular-l10n';

import { FormChangePasswordModule } from 'src/app/modules/ui/forms/form-change-password/form-change-password.module';
import { ChangePasswordDataService } from 'src/app/services/change-password-data/change-password-data.service';

import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordComponent } from './change-password.component';

@NgModule({
  declarations: [
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    ChangePasswordRoutingModule,
    FormChangePasswordModule,
    L10nTranslationModule,
  ],
  providers: [
    ChangePasswordDataService,
  ],
})
export class ChangePasswordModule { }
