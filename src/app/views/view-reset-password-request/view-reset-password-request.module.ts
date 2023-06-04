import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleModalModule } from '@looorent/ngx-simple-modal';

import { ModalModule } from 'src/app/modules/ui/modal/modal.module';
import { FormResetPasswordRequestModule } from 'src/app/modules/ui/forms/form-reset-password-request/form-reset-password-request.module';
import { ResetPasswordRequestDataModule } from 'src/app/modules/data/reset-password-request-data/reset-password-request-data.module';

import { ViewResetPasswordRequestComponent } from './view-reset-password-request.component';
import { ViewResetPasswordRequestModalService } from './services/view-reset-password-request-modal.service';

@NgModule({
  declarations: [
    ViewResetPasswordRequestComponent
  ],
  imports: [
    CommonModule,
    SimpleModalModule,
    ModalModule,
    FormResetPasswordRequestModule,
    ResetPasswordRequestDataModule,
  ],
  providers: [
    ViewResetPasswordRequestModalService
  ]
})
export class ViewResetPasswordRequestModule { }
