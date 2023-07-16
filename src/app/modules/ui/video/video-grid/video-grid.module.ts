import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L10nTranslationModule } from 'angular-l10n';

import { VideoCardModule } from '../video-card/video-card.module';
import { VideoCardSkeletonModule } from '../video-card-skeleton/video-card-skeleton.module';

import { VideoGridComponent } from './components/video-grid/video-grid.component';

@NgModule({
  declarations: [
    VideoGridComponent,
  ],
  imports: [
    CommonModule,
    VideoCardModule,
    VideoCardSkeletonModule,
    L10nTranslationModule,
  ],
  exports: [
    VideoGridComponent,
  ],
})
export class VideoGridModule { }
