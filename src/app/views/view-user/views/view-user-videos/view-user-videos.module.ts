import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoListFormModule } from 'src/app/modules/data/video-list-form/video-list-form.module';
import { VideoListDataModule } from 'src/app/modules/data/video-list-data/video-list-data.module';
import { ViewUserVideosRoutingModule } from './view-user-videos-routing.module';
import { VideoModule } from 'src/app/modules/ui/video/video.module';

import { RouteHandlerService } from './services/route-handler.service';

import { ViewUserVideosComponent } from './view-user-videos.component';

@NgModule({
  declarations: [
    ViewUserVideosComponent,
  ],
  imports: [
    CommonModule,
    ViewUserVideosRoutingModule,
    VideoListFormModule,
    VideoListDataModule,
    VideoModule,
  ],
  providers: [
    RouteHandlerService,
  ]
})
export class ViewUserVideosModule {}
