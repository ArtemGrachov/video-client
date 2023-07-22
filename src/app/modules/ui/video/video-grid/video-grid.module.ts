import { NgModule } from '@angular/core';
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { VideoCardModule } from '../video-card/video-card.module';
import { VideoCardSkeletonModule } from '../video-card-skeleton/video-card-skeleton.module';

import { VideoGridComponent } from './components/video-grid/video-grid.component';

@NgModule({
  declarations: [
    VideoGridComponent,
  ],
  imports: [
    SharedModule,
    VideoCardModule,
    VideoCardSkeletonModule,
    L10nTranslationModule,
  ],
  exports: [
    VideoGridComponent,
  ],
})
export class VideoGridModule { }
