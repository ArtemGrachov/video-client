import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L10nTranslationModule } from 'angular-l10n';

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
    L10nTranslationModule,
  ],
  providers: [
    ModalConfirmationService,
  ]
})
export class ModalConfirmationModule { }
