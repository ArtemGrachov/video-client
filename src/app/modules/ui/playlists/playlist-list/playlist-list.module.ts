import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L10nTranslationModule } from 'angular-l10n';

import { PlaylistItemModule } from '../playlist-item/playlist-item.module';
import { PlaylistItemSkeletonModule } from '../playlist-item-skeleton/playlist-item-skeleton.module';

import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';

@NgModule({
  declarations: [
    PlaylistListComponent,
  ],
  imports: [
    CommonModule,
    PlaylistItemModule,
    PlaylistItemSkeletonModule,
    L10nTranslationModule,
  ],
  exports: [
    PlaylistListComponent,
  ],
})
export class PlaylistListModule { }
