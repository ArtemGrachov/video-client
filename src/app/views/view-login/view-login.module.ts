import { NgModule } from '@angular/core';
import { SimpleModalModule } from '@looorent/ngx-simple-modal';
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { ModalModule } from 'src/app/modules/ui/modal/modal.module';
import { FormLoginModule } from 'src/app/modules/ui/forms/form-login/form-login.module';
import { LoginDataService } from 'src/app/services/login-data/login-data.service';
import { AuthApiService } from 'src/app/services/auth-api/auth-api.service';

import { ViewLoginModalService } from './services/view-login-modal.service';
import { ViewLoginComponent } from './view-login.component';

@NgModule({
  declarations: [
    ViewLoginComponent
  ],
  imports: [
    SharedModule,
    SimpleModalModule,
    ModalModule,
    FormLoginModule,
    L10nTranslationModule,
  ],
  providers: [
    ViewLoginModalService,
    LoginDataService,
    AuthApiService,
  ]
})
export class ViewLoginModule { }
