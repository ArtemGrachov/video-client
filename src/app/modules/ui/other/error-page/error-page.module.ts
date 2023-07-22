import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';

import { ErrorPageComponent } from './error-page.component';

@NgModule({
  declarations: [
    ErrorPageComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    L10nTranslationModule,
  ],
  exports: [
    ErrorPageComponent,
  ],
})
export class ErrorPageModule { }
