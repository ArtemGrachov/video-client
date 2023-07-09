import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistItemModule } from '../playlist-item/playlist-item.module';

import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';

@NgModule({
  declarations: [
    PlaylistListComponent,
  ],
  imports: [
    CommonModule,
    PlaylistItemModule,
  ],
  exports: [
    PlaylistListComponent,
  ],
})
export class PlaylistListModule { }
