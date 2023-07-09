import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarModule } from '../../other/avatar/avatar.module';
import { CommentLikeButtonModule } from '../comment-like-button/comment-like-button.module';
import { ModalConfirmationModule } from '../../modals/modal-confirmation/modal-confirmation.module';

import { CommentItemComponent } from './components/comment-item/comment-item.component';

@NgModule({
  declarations: [
    CommentItemComponent,
  ],
  imports: [
    CommonModule,
    AvatarModule,
    CommentLikeButtonModule,
    ModalConfirmationModule,
  ],
  exports: [
    CommentItemComponent,
  ],
})
export class CommentItemModule { }
