import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoApiModule } from '../video-api/video-api.module';
import { PlaylistApiModule } from '../playlist-api/playlist-api.module';

import { VideoListDataService } from './services/video-list-data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VideoApiModule,
    PlaylistApiModule,
  ],
  providers: [VideoListDataService]
})
export class VideoListDataModule { }
