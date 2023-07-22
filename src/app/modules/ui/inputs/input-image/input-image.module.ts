import { NgModule } from '@angular/core';
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { InputImageComponent } from './input-image.component';

@NgModule({
  declarations: [
    InputImageComponent,
  ],
  imports: [
    SharedModule,
    L10nTranslationModule,
  ],
  exports: [
    InputImageComponent,
  ]
})
export class InputImageModule { }
