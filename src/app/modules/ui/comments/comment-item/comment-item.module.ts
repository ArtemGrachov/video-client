import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { AvatarModule } from '../../other/avatar/avatar.module';
import { CommentLikeButtonModule } from '../comment-like-button/comment-like-button.module';
import { ModalConfirmationModule } from '../../modals/modal-confirmation/modal-confirmation.module';

import { CommentItemComponent } from './components/comment-item/comment-item.component';

@NgModule({
  declarations: [
    CommentItemComponent,
  ],
  imports: [
    SharedModule,
    AvatarModule,
    CommentLikeButtonModule,
    ModalConfirmationModule,
  ],
  exports: [
    CommentItemComponent,
  ],
})
export class CommentItemModule { }
