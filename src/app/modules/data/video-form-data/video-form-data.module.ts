import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoApiModule } from '../video-api/video-api.module';

import { VideoFormDataService } from './services/video-form-data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VideoApiModule,
  ],
  providers: [
    VideoFormDataService,
  ],
})
export class VideoFormDataModule { }
