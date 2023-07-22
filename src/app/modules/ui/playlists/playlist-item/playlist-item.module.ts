import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';

import { PlaylistItemComponent } from './components/playlist-item/playlist-item.component';
import { AvatarModule } from '../../other/avatar/avatar.module';

@NgModule({
  declarations: [
    PlaylistItemComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    AvatarModule,
    L10nTranslationModule,
  ],
  exports: [
    PlaylistItemComponent,
  ],
})
export class PlaylistItemModule { }
