import { NgModule } from '@angular/core';
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { CommentItemModule } from '../comment-item/comment-item.module';
import { CommentItemSkeletonModule } from '../comment-item-skeleton/comment-item-skeleton.module';

import { CommentListComponent } from './components/comment-list/comment-list.component';

@NgModule({
  declarations: [
    CommentListComponent,
  ],
  imports: [
    SharedModule,
    CommentItemModule,
    CommentItemSkeletonModule,
    L10nTranslationModule,
  ],
  exports: [
    CommentListComponent,
  ],
})
export class CommentListModule { }
