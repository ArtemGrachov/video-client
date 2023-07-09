import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerModule } from 'src/app/modules/ui/player/player.module';
import { VideoModule } from 'src/app/modules/ui/video/video.module';
import { CommentsModule } from 'src/app/modules/ui/comments/comments.module';
import { FormCommentModule } from 'src/app/modules/ui/forms/form-comment/form-comment.module';
import { ViewsCommentEditModule } from 'src/app/views/views-comment-edit/views-comment-edit.module';
import { ModalConfirmationModule } from 'src/app/modules/ui/modals/modal-confirmation/modal-confirmation.module';
import { ViewPlaylistAddVideoModule } from '../view-playlist-add-video/view-playlist-add-video.module';
import { VideoDataService } from 'src/app/services/video-data/video-data.service';
import { VideoListDataService } from 'src/app/services/video-list-data/video-list-data.service';
import { CommentsListDataService } from 'src/app/services/comments-list-data/comments-list-data.service';
import { CommentsListFormService } from 'src/app/services/comments-list-form/comments-list-form.service';
import { CommentFormDataService } from 'src/app/services/comment-form-data/comment-form-data.service';
import { VideoApiService } from 'src/app/services/video-api/video-api.service';
import { CommentsApiService } from 'src/app/services/comments-api/comments-api.service';

import { ViewVideoRoutingModule } from './view-video-routing.module';
import { ViewVideoComponent } from './view-video.component';

@NgModule({
  declarations: [
    ViewVideoComponent,
  ],
  imports: [
    CommonModule,
    ViewVideoRoutingModule,
    PlayerModule,
    VideoModule,
    CommentsModule,
    FormCommentModule,
    ViewsCommentEditModule,
    ModalConfirmationModule,
    ViewPlaylistAddVideoModule,
  ],
  providers: [
    VideoDataService,
    VideoListDataService,
    CommentsListDataService,
    CommentsListFormService,
    CommentFormDataService,
    VideoApiService,
    CommentsApiService,
  ]
})
export class ViewVideoModule {}
