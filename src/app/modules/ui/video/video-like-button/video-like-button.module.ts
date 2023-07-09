import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LikeButtonModule } from '../../other/like-button/like-button.module';
import { VideoLikeButtonComponent } from './components/video-like-button/video-like-button.component';

@NgModule({
  declarations: [
    VideoLikeButtonComponent,
  ],
  imports: [
    CommonModule,
    LikeButtonModule,
  ],
  exports: [
    VideoLikeButtonComponent,
  ],
})
export class VideoLikeButtonModule { }
