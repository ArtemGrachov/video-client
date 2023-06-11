import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoApiModule } from '../video-api/video-api.module';

import { VideoDataService } from './services/video-data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VideoApiModule
  ],
  providers: [
    VideoDataService,
  ]
})
export class VideoDataModule { }
