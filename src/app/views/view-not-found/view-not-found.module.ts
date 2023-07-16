import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L10nTranslationModule } from 'angular-l10n';

import { ViewNotFoundRoutingModule } from './view-not-found-routing.module';
import { ViewNotFoundComponent } from './view-not-found.component';


@NgModule({
  declarations: [
    ViewNotFoundComponent
  ],
  imports: [
    CommonModule,
    ViewNotFoundRoutingModule,
    L10nTranslationModule,
  ]
})
export class ViewNotFoundModule { }
