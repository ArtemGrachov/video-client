import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistAddVideoDataService } from './services/playlist-add-video-data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PlaylistAddVideoDataService,
  ],
})
export class PlaylistAddVideoDataModule { }
