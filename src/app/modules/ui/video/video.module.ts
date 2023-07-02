import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ThumbnailModule } from '../other/thumbnail/thumbnail.module';
import { AvatarModule } from '../other/avatar/avatar.module';
import { LikeButtonModule } from '../other/like-button/like-button.module';
import { ModalConfirmationModule } from '../modals/modal-confirmation/modal-confirmation.module';
import { UsersModule } from '../users/users.module';

import { VideoCardComponent } from './components/video-card/video-card.component';
import { VideoGridComponent } from './components/video-grid/video-grid.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { VideoLikeButtonComponent } from './components/video-like-button/video-like-button.component';

@NgModule({
  declarations: [
    VideoCardComponent,
    VideoGridComponent,
    VideoDetailsComponent,
    VideoLikeButtonComponent,
  ],
  exports: [
    VideoCardComponent,
    VideoGridComponent,
    VideoDetailsComponent,
    VideoLikeButtonComponent,
  ],
  imports: [
    CommonModule,
    ThumbnailModule,
    AvatarModule,
    RouterModule,
    LikeButtonModule,
    ModalConfirmationModule,
    UsersModule,
  ]
})
export class VideoModule { }
