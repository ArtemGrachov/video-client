import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsApiModule } from '../comments-api/comments-api.module';
import { VideoApiModule } from '../video-api/video-api.module';

import { CommentsListDataService } from './services/comments-list-data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommentsApiModule,
    VideoApiModule,
  ],
  providers: [
    CommentsListDataService,
  ],
})
export class CommentsListDataModule { }
