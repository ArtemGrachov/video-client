import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleModalModule } from '@looorent/ngx-simple-modal';
import { L10nTranslationModule } from 'angular-l10n';

import { ModalModule } from 'src/app/modules/ui/modal/modal.module';
import { FormCommentModule } from 'src/app/modules/ui/forms/form-comment/form-comment.module';

import { ViewCommentEditModalService } from './services/view-comment-edit-modal.service';
import { CommentFormDataService } from 'src/app/services/comment-form-data/comment-form-data.service';
import { CommentsApiService } from 'src/app/services/comments-api/comments-api.service';

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
    L10nTranslationModule,
  ],
  providers: [
    CommentsApiService,
    ViewCommentEditModalService,
    CommentFormDataService,
  ],
})
export class ViewsCommentEditModule { }
