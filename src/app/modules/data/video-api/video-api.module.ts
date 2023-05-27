import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoApiService } from './services/video-api.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [VideoApiService]
})
export class VideoApiModule { }
