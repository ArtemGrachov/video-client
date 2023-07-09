import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LikeButtonModule } from '../../other/like-button/like-button.module';

import { CommentLikeButtonComponent } from './components/comment-like-button/comment-like-button.component';

@NgModule({
  declarations: [
    CommentLikeButtonComponent,
  ],
  imports: [
    CommonModule,
    LikeButtonModule,
  ],
  exports: [
    CommentLikeButtonComponent,
  ],
})
export class CommentLikeButtonModule { }
