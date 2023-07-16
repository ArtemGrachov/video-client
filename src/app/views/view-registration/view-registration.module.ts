import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleModalModule } from '@looorent/ngx-simple-modal';
import { L10nTranslationModule } from 'angular-l10n';

import { ModalModule } from 'src/app/modules/ui/modal/modal.module';
import { FormRegistrationModule } from 'src/app/modules/ui/forms/form-registration/form-registration.module';
import { RegistrationDataService } from 'src/app/services/registration-data/registration-data.service';
import { AuthApiService } from 'src/app/services/auth-api/auth-api.service';

import { ViewRegistrationComponent } from './view-registration.component';
import { ViewRegistrationModalService } from './services/view-registration-modal.service';

@NgModule({
  declarations: [
    ViewRegistrationComponent
  ],
  imports: [
    CommonModule,
    SimpleModalModule,
    ModalModule,
    FormRegistrationModule,
    L10nTranslationModule,
  ],
  providers: [
    ViewRegistrationModalService,
    RegistrationDataService,
    AuthApiService,
  ]
})
export class ViewRegistrationModule { }
