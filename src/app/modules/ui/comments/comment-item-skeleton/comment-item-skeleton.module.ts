import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentItemSkeletonComponent } from './comment-item-skeleton.component';

@NgModule({
  declarations: [
    CommentItemSkeletonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommentItemSkeletonComponent,
  ],
})
export class CommentItemSkeletonModule { }
