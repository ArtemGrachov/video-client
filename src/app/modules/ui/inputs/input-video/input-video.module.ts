import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L10nTranslationModule } from 'angular-l10n';

import { InputVideoComponent } from './input-video.component';

@NgModule({
  declarations: [
    InputVideoComponent
  ],
  imports: [
    CommonModule,
    L10nTranslationModule,
  ],
  exports: [
    InputVideoComponent,
  ],
})
export class InputVideoModule { }
