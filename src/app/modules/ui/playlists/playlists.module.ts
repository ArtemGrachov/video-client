import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AvatarModule } from '../other/avatar/avatar.module';
import { UsersModule } from '../users/users.module';

import { PlaylistItemComponent } from './components/playlist-item/playlist-item.component';
import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';

@NgModule({
  declarations: [
    PlaylistItemComponent,
    PlaylistListComponent,
    PlaylistDetailsComponent,
  ],
  imports: [
    CommonModule,
    AvatarModule,
    RouterModule,
    UsersModule,
  ],
  exports: [
    PlaylistItemComponent,
    PlaylistListComponent,
    PlaylistDetailsComponent,
  ],
})
export class PlaylistsModule { }
