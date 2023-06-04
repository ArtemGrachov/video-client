import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleModalModule } from '@looorent/ngx-simple-modal';

import { ModalModule } from 'src/app/modules/ui/modal/modal.module';
import { FormRegistrationModule } from 'src/app/modules/ui/forms/form-registration/form-registration.module';
import { RegistrationDataModule } from 'src/app/modules/data/registration-data/registration-data.module';

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
    RegistrationDataModule,
  ],
  providers: [
    ViewRegistrationModalService
  ]
})
export class ViewRegistrationModule { }
