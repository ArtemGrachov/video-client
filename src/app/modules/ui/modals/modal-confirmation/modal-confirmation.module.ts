import { NgModule } from '@angular/core';
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { ModalModule } from '../../modal/modal.module';

import { ModalConfirmationComponent } from './modal-confirmation.component';

import { ModalConfirmationService } from './services/modal-confirmation.service';

@NgModule({
  declarations: [
    ModalConfirmationComponent
  ],
  imports: [
    SharedModule,
    ModalModule,
    L10nTranslationModule,
  ],
  providers: [
    ModalConfirmationService,
  ]
})
export class ModalConfirmationModule { }
