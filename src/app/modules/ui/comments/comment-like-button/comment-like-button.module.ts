import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { LikeButtonModule } from '../../other/like-button/like-button.module';

import { CommentLikeButtonComponent } from './components/comment-like-button/comment-like-button.component';

@NgModule({
  declarations: [
    CommentLikeButtonComponent,
  ],
  imports: [
    SharedModule,
    LikeButtonModule,
  ],
  exports: [
    CommentLikeButtonComponent,
  ],
})
export class CommentLikeButtonModule { }
