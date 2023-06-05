import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoDataModule } from 'src/app/modules/data/video-data/video-data.module';
import { PlayerModule } from 'src/app/modules/ui/player/player.module';
import { VideoModule } from 'src/app/modules/ui/video/video.module';
import { VideoListDataModule } from 'src/app/modules/data/video-list-data/video-list-data.module';
import { CommentsListDataModule } from 'src/app/modules/data/comments-list-data/comments-list-data.module';

import { ViewVideoRoutingModule } from './view-video-routing.module';
import { ViewVideoComponent } from './view-video.component';

@NgModule({
  declarations: [
    ViewVideoComponent
  ],
  imports: [
    CommonModule,
    ViewVideoRoutingModule,
    VideoDataModule,
    PlayerModule,
    VideoModule,
    VideoListDataModule,
    CommentsListDataModule,
  ]
})
export class ViewVideoModule {}
