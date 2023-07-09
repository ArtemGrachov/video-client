import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoModule } from 'src/app/modules/ui/video/video.module';
import { VideoListDataService } from 'src/app/services/video-list-data/video-list-data.service';
import { VideoListFormService } from 'src/app/services/video-list-form/video-list-form.service';
import { RouteHandlerService } from './services/route-handler.service';
import { VideoApiService } from 'src/app/services/video-api/video-api.service';

import { ViewIndexRoutingModule } from './view-index-routing.module';
import { ViewIndexComponent } from './view-index.component';

@NgModule({
  declarations: [
    ViewIndexComponent,
  ],
  imports: [
    CommonModule,
    ViewIndexRoutingModule,
    VideoModule,
  ],
  providers: [
    RouteHandlerService,
    VideoListDataService,
    VideoListFormService,
    VideoApiService,
  ]
})
export class ViewIndexModule { }
