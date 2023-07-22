import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { FormControlModule } from '../form-control/form-control.module';
import { FormServerErrorModule } from '../form-server-error/form-server-error.module';

import { FormAddToPlaylistComponent } from './form-add-to-playlist.component';

@NgModule({
  declarations: [
    FormAddToPlaylistComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormControlModule,
    FormServerErrorModule,
    InfiniteScrollModule,
    L10nTranslationModule,
  ],
  exports: [
    FormAddToPlaylistComponent,
  ],
})
export class FormAddToPlaylistModule { }
