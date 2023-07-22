import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { CommentItemSkeletonComponent } from './comment-item-skeleton.component';

@NgModule({
  declarations: [
    CommentItemSkeletonComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    CommentItemSkeletonComponent,
  ],
})
export class CommentItemSkeletonModule { }
