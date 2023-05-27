import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThumbnailModule } from '../other/thumbnail/thumbnail.module';
import { AvatarModule } from '../other/avatar/avatar.module';
import { LikeButtonModule } from '../other/like-button/like-button.module';

import { VideoCardComponent } from './components/video-card/video-card.component';
import { VideoGridComponent } from './components/video-grid/video-grid.component';

@NgModule({
  declarations: [
    VideoCardComponent,
    VideoGridComponent
  ],
  exports: [
    VideoCardComponent,
    VideoGridComponent
  ],
  imports: [
    CommonModule,
    ThumbnailModule,
    AvatarModule
  ]
})
export class VideoModule { }
