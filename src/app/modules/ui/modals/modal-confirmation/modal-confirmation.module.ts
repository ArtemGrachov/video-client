import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from '../../modal/modal.module';

import { ModalConfirmationComponent } from './modal-confirmation.component';

import { ModalConfirmationService } from './services/modal-confirmation.service';

@NgModule({
  declarations: [
    ModalConfirmationComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
  ],
  providers: [
    ModalConfirmationService,
  ]
})
export class ModalConfirmationModule { }
