import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarModule } from '../other/avatar/avatar.module';

import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';

@NgModule({
  declarations: [
    CommentItemComponent,
    CommentListComponent,
  ],
  imports: [
    CommonModule,
    AvatarModule,
  ],
  exports: [
    CommentItemComponent,
    CommentListComponent,
  ]
})
export class CommentsModule { }
