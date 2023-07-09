import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PlaylistItemComponent } from './components/playlist-item/playlist-item.component';
import { AvatarModule } from '../../other/avatar/avatar.module';

@NgModule({
  declarations: [
    PlaylistItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AvatarModule,
  ],
  exports: [
    PlaylistItemComponent,
  ],
})
export class PlaylistItemModule { }
