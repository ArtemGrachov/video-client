import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoListFormService } from 'src/app/services/video-list-form/video-list-form.service';
import { VideoListDataService } from 'src/app/services/video-list-data/video-list-data.service';
import { VideoApiService } from 'src/app/services/video-api/video-api.service';
import { ViewUserVideosRoutingModule } from './view-user-videos-routing.module';
import { VideoGridModule } from 'src/app/modules/ui/video/video-grid/video-grid.module';

import { RouteHandlerService } from './services/route-handler.service';

import { ViewUserVideosComponent } from './view-user-videos.component';

@NgModule({
  declarations: [
    ViewUserVideosComponent,
  ],
  imports: [
    CommonModule,
    ViewUserVideosRoutingModule,
    VideoGridModule,
  ],
  providers: [
    RouteHandlerService,
    VideoListFormService,
    VideoListDataService,
    VideoApiService,
  ]
})
export class ViewUserVideosModule {}