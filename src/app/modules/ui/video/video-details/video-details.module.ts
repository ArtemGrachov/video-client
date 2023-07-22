import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { VideoLikeButtonModule } from '../video-like-button/video-like-button.module';
import { UserBlockModule } from '../../users/user-block/user-block.module';
import { UserSubscribeButtonModule } from '../../users/user-subscribe-button/user-subscribe-button.module';

import { VideoDetailsComponent } from './components/video-details/video-details.component';

@NgModule({
  declarations: [
    VideoDetailsComponent,
  ],
  imports: [
    SharedModule,
    VideoLikeButtonModule,
    UserBlockModule,
    UserSubscribeButtonModule,
  ],
  exports: [
    VideoDetailsComponent,
  ],
})
export class VideoDetailsModule { }
