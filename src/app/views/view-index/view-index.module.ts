import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoGridModule } from 'src/app/modules/ui/video/video-grid/video-grid.module';
import { VideoListDataService } from 'src/app/services/video-list-data/video-list-data.service';
import { VideoListFormService } from 'src/app/services/video-list-form/video-list-form.service';
import { PlaceholderModule } from 'src/app/modules/ui/other/placeholder/placeholder.module';
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
    VideoGridModule,
    PlaceholderModule,
  ],
  providers: [
    RouteHandlerService,
    VideoListDataService,
    VideoListFormService,
    VideoApiService,
  ]
})
export class ViewIndexModule { }
