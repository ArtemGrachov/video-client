import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarModule } from '../other/avatar/avatar.module';
import { LikeButtonModule } from '../other/like-button/like-button.module';

import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentLikeButtonComponent } from './components/comment-like-button/comment-like-button.component';

@NgModule({
  declarations: [
    CommentItemComponent,
    CommentListComponent,
    CommentLikeButtonComponent,
  ],
  imports: [
    CommonModule,
    AvatarModule,
    LikeButtonModule,
  ],
  exports: [
    CommentItemComponent,
    CommentListComponent,
    CommentLikeButtonComponent,
  ]
})
export class CommentsModule { }
