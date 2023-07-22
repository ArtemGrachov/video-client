import { NgModule } from '@angular/core';
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';

import { PlaylistItemModule } from '../playlist-item/playlist-item.module';
import { PlaylistItemSkeletonModule } from '../playlist-item-skeleton/playlist-item-skeleton.module';

import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';

@NgModule({
  declarations: [
    PlaylistListComponent,
  ],
  imports: [
    SharedModule,
    PlaylistItemModule,
    PlaylistItemSkeletonModule,
    L10nTranslationModule,
  ],
  exports: [
    PlaylistListComponent,
  ],
})
export class PlaylistListModule { }
