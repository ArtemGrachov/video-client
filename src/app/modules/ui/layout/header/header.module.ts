import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { FormSearchModule } from '../../forms/form-search/form-search.module';
import { LogoModule } from '../../other/logo/logo.module';
import { ModalMenuModule } from '../../modals/modal-menu/modal-menu.module';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    FormSearchModule,
    LogoModule,
    ModalMenuModule,
    L10nTranslationModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
