import { NgModule } from '@angular/core';
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { InputVideoComponent } from './input-video.component';

@NgModule({
  declarations: [
    InputVideoComponent
  ],
  imports: [
    SharedModule,
    L10nTranslationModule,
  ],
  exports: [
    InputVideoComponent,
  ],
})
export class InputVideoModule { }
