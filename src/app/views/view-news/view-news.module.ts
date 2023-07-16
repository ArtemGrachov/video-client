import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoGridModule } from 'src/app/modules/ui/video/video-grid/video-grid.module';
import { VideoListDataService } from 'src/app/services/video-list-data/video-list-data.service';
import { VideoListFormService } from 'src/app/services/video-list-form/video-list-form.service';
import { RouteHandlerService } from './services/route-handler.service';
import { VideoApiService } from 'src/app/services/video-api/video-api.service';

import { ViewNewsRoutingModule } from './view-news-routing.module';
import { ViewNewsComponent } from './view-news.component';

@NgModule({
  declarations: [
    ViewNewsComponent,
  ],
  imports: [
    CommonModule,
    ViewNewsRoutingModule,
    VideoGridModule,
  ],
  providers: [
    RouteHandlerService,
    VideoListDataService,
    VideoListFormService,
    VideoApiService,
  ]
})
export class ViewNewsModule { }
