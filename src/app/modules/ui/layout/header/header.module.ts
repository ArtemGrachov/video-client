import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormSearchModule } from '../../forms/form-search/form-search.module';
import { LogoModule } from '../../other/logo/logo.module';
import { ModalMenuModule } from '../../modals/modal-menu/modal-menu.module';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormSearchModule,
    LogoModule,
    ModalMenuModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
