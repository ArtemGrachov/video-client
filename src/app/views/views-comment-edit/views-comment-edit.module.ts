import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleModalModule } from '@looorent/ngx-simple-modal';

import { ModalModule } from 'src/app/modules/ui/modal/modal.module';
import { FormCommentModule } from 'src/app/modules/ui/forms/form-comment/form-comment.module';
import { CommentFormDataModule } from 'src/app/modules/data/comment-form-data/comment-form-data.module';

import { ViewCommentEditModalService } from './services/view-comment-edit-modal.service';

import { ViewsCommentEditComponent } from './views-comment-edit.component';

@NgModule({
  declarations: [
    ViewsCommentEditComponent
  ],
  imports: [
    CommonModule,
    SimpleModalModule,
    ModalModule,
    FormCommentModule,
    CommentFormDataModule,
  ],
  providers: [
    ViewCommentEditModalService,
  ],
})
export class ViewsCommentEditModule { }
