import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ThumbnailModule } from '../other/thumbnail/thumbnail.module';
import { AvatarModule } from '../other/avatar/avatar.module';
import { LikeButtonModule } from '../other/like-button/like-button.module';

import { VideoCardComponent } from './components/video-card/video-card.component';
import { VideoGridComponent } from './components/video-grid/video-grid.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';

@NgModule({
  declarations: [
    VideoCardComponent,
    VideoGridComponent,
    VideoDetailsComponent,
  ],
  exports: [
    VideoCardComponent,
    VideoGridComponent,
    VideoDetailsComponent,
  ],
  imports: [
    CommonModule,
    ThumbnailModule,
    AvatarModule,
    RouterModule,
    LikeButtonModule,
  ]
})
export class VideoModule { }
