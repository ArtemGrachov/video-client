import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { LikeButtonModule } from '../../other/like-button/like-button.module';
import { VideoLikeButtonComponent } from './components/video-like-button/video-like-button.component';

@NgModule({
  declarations: [
    VideoLikeButtonComponent,
  ],
  imports: [
    SharedModule,
    LikeButtonModule,
  ],
  exports: [
    VideoLikeButtonComponent,
  ],
})
export class VideoLikeButtonModule { }
