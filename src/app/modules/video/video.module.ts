import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThumbnailModule } from '../other/thumbnail/thumbnail.module';

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
    ThumbnailModule
  ]
})
export class VideoModule { }
