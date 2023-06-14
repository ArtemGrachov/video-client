import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarModule } from '../other/avatar/avatar.module';

import { PlaylistItemComponent } from './components/playlist-item/playlist-item.component';
import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';

@NgModule({
  declarations: [
    PlaylistItemComponent,
    PlaylistListComponent,
  ],
  imports: [
    CommonModule,
    AvatarModule,
  ],
  exports: [
    PlaylistItemComponent,
    PlaylistListComponent,
  ],
})
export class PlaylistsModule { }
