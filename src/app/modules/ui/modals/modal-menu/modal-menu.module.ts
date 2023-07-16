import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { L10nTranslationModule } from 'angular-l10n';

import { FormSearchModule } from '../../forms/form-search/form-search.module';
import { NavModule } from '../../layout/nav/nav.module';

import { ModalMenuService } from './services/modal-menu.service';

import { ModalMenuComponent } from './modal-menu.component';

@NgModule({
  declarations: [
    ModalMenuComponent
  ],
  imports: [
    CommonModule,
    FormSearchModule,
    RouterModule,
    NavModule,
    L10nTranslationModule,
  ],
  providers: [
    ModalMenuService,
  ]
})
export class ModalMenuModule { }
