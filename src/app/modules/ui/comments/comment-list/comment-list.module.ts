import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentItemModule } from '../comment-item/comment-item.module';

import { CommentListComponent } from './components/comment-list/comment-list.component';

@NgModule({
  declarations: [
    CommentListComponent,
  ],
  imports: [
    CommonModule,
    CommentItemModule,
  ],
  exports: [
    CommentListComponent,
  ],
})
export class CommentListModule { }
