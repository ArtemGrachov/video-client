import { NgModule } from '@angular/core';
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    SharedModule,
    L10nTranslationModule,
  ],
  exports: [
    FooterComponent,
  ],
})
export class FooterModule { }
