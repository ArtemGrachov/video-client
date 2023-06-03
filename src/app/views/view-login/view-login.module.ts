import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleModalModule } from '@looorent/ngx-simple-modal';

import { ModalModule } from 'src/app/modules/ui/modal/modal.module';
import { FormLoginModule } from 'src/app/modules/ui/forms/form-login/form-login.module';
import { AuthModule } from 'src/app/modules/data/auth/auth.module';

import { ViewLoginModalService } from './services/view-login-modal.service';
import { ViewLoginComponent } from './view-login.component';

@NgModule({
  declarations: [
    ViewLoginComponent
  ],
  imports: [
    CommonModule,
    SimpleModalModule,
    ModalModule,
    FormLoginModule
  ],
  providers: [
    ViewLoginModalService
  ]
})
export class ViewLoginModule { }
