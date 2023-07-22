import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';

import { VideoCardSkeletonComponent } from './video-card-skeleton.component';

@NgModule({
  declarations: [
    VideoCardSkeletonComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    VideoCardSkeletonComponent,
  ],
})
export class VideoCardSkeletonModule { }
