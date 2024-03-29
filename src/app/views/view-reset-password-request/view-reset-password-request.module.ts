import { NgModule } from '@angular/core';
import { SimpleModalModule } from '@looorent/ngx-simple-modal';
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { ModalModule } from 'src/app/modules/ui/modal/modal.module';
import { FormResetPasswordRequestModule } from 'src/app/modules/ui/forms/form-reset-password-request/form-reset-password-request.module';
import { ResetPasswordRequestDataService } from 'src/app/services/reset-password-request-data/reset-password-request-data.service';
import { AuthApiService } from 'src/app/services/auth-api/auth-api.service';

import { ViewResetPasswordRequestComponent } from './view-reset-password-request.component';
import { ViewResetPasswordRequestModalService } from './services/view-reset-password-request-modal.service';

@NgModule({
  declarations: [
    ViewResetPasswordRequestComponent,
  ],
  imports: [
    SharedModule,
    SimpleModalModule,
    ModalModule,
    FormResetPasswordRequestModule,
    L10nTranslationModule,
  ],
  providers: [
    ViewResetPasswordRequestModalService,
    ResetPasswordRequestDataService,
    AuthApiService,
  ],
})
export class ViewResetPasswordRequestModule { }
