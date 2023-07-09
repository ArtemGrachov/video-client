import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerModule } from 'src/app/modules/ui/player/player.module';
import { VideoDetailsModule } from 'src/app/modules/ui/video/video-details/video-details.module';
import { CommentListModule } from 'src/app/modules/ui/comments/comment-list/comment-list.module';
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
import { UserDataService } from 'src/app/services/user-data/user-data.service';

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
    FormCommentModule,
    ViewsCommentEditModule,
    ModalConfirmationModule,
    ViewPlaylistAddVideoModule,
    VideoDetailsModule,
    CommentListModule,
  ],
  providers: [
    VideoDataService,
    VideoListDataService,
    CommentsListDataService,
    CommentsListFormService,
    CommentFormDataService,
    VideoApiService,
    CommentsApiService,
    UserDataService,
  ]
})
export class ViewVideoModule {}
