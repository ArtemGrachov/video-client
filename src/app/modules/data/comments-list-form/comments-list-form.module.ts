import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsListFormService } from './services/comments-list-form.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CommentsListFormService,
  ]
})
export class CommentsListFormModule { }
