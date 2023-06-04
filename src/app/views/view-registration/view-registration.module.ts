import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleModalModule } from '@looorent/ngx-simple-modal';

import { ModalModule } from 'src/app/modules/ui/modal/modal.module';
import { FormLoginModule } from 'src/app/modules/ui/forms/form-login/form-login.module';
import { LoginDataModule } from 'src/app/modules/data/login-data/login-data.module';

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
    FormLoginModule,
    LoginDataModule
  ],
  providers: [
    ViewRegistrationModalService
  ]
})
export class ViewRegistrationModule { }
