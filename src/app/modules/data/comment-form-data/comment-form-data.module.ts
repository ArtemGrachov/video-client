import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentFormDataService } from './services/comment-form-data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    CommentFormDataService,
  ]
})
export class CommentFormDataModule { }
