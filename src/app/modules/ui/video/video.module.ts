import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThumbnailModule } from '../other/thumbnail/thumbnail.module';
import { AvatarModule } from '../other/avatar/avatar.module';

import { VideoCardComponent } from './components/video-card/video-card.component';
import { VideoGridComponent } from './components/video-grid/video-grid.component';
import { RouterModule } from '@angular/router';

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
    AvatarModule,
    RouterModule
  ]
})
export class VideoModule { }
