import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ThumbnailModule } from '../../other/thumbnail/thumbnail.module';
import { ModalConfirmationModule } from '../../modals/modal-confirmation/modal-confirmation.module';
import { AvatarModule } from '../../other/avatar/avatar.module';
import { VideoCardComponent } from './components/video-card/video-card.component';

@NgModule({
  declarations: [
    VideoCardComponent,
  ],
  imports: [
    CommonModule,
    ThumbnailModule,
    AvatarModule,
    RouterModule,
    ModalConfirmationModule,
  ],
  exports: [
    VideoCardComponent,
  ],
})
export class VideoCardModule { }
