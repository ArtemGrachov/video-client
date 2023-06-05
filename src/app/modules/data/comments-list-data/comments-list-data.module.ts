import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsListDataService } from './services/comments-list-data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CommentsListDataService,
  ],
})
export class CommentsListDataModule { }
