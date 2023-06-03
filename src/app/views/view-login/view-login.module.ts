import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleModalModule } from '@looorent/ngx-simple-modal';

import { ModalModule } from 'src/app/modules/ui/modal/modal.module';

import { ViewLoginModalService } from './services/view-login-modal.service';
import { ViewLoginComponent } from './view-login.component';

@NgModule({
  declarations: [
    ViewLoginComponent
  ],
  imports: [
    CommonModule,
    SimpleModalModule,
    ModalModule
  ],
  providers: [
    ViewLoginModalService
  ]
})
export class ViewLoginModule { }
