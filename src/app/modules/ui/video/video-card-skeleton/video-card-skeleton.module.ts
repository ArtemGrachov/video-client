import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoCardSkeletonComponent } from './video-card-skeleton.component';

@NgModule({
  declarations: [
    VideoCardSkeletonComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    VideoCardSkeletonComponent,
  ],
})
export class VideoCardSkeletonModule { }
