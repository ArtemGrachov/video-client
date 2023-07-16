import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L10nTranslationModule } from 'angular-l10n';

import { InputImageComponent } from './input-image.component';

@NgModule({
  declarations: [
    InputImageComponent,
  ],
  imports: [
    CommonModule,
    L10nTranslationModule,
  ],
  exports: [
    InputImageComponent,
  ]
})
export class InputImageModule { }
