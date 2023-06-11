import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsApiService } from './services/comments-api.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CommentsApiService,
  ],
})
export class CommentsApiModule { }
