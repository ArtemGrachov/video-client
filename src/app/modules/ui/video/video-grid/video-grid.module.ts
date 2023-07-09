import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoGridComponent } from './components/video-grid/video-grid.component';
import { VideoCardModule } from '../video-card/video-card.module';

@NgModule({
  declarations: [
    VideoGridComponent,
  ],
  imports: [
    CommonModule,
    VideoCardModule,
  ],
  exports: [
    VideoGridComponent,
  ],
})
export class VideoGridModule { }
