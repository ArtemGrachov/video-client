import { NgModule } from '@angular/core';
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { ViewNotFoundRoutingModule } from './view-not-found-routing.module';
import { ViewNotFoundComponent } from './view-not-found.component';

@NgModule({
  declarations: [
    ViewNotFoundComponent
  ],
  imports: [
    SharedModule,
    ViewNotFoundRoutingModule,
    L10nTranslationModule,
  ]
})
export class ViewNotFoundModule { }
