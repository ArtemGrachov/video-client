import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { L10nTranslationModule } from 'angular-l10n';

import { NavComponent } from './nav.component';

@NgModule({
  declarations: [
    NavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    L10nTranslationModule,
  ],
  exports: [
    NavComponent,
  ]
})
export class NavModule { }
