import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormVideoModule } from 'src/app/modules/ui/forms/form-video/form-video.module';

import { VideoApiService } from 'src/app/services/video-api/video-api.service';
import { VideoFormDataService } from 'src/app/services/video-form-data/video-form-data.service';

import { ViewCreateVideoRoutingModule } from './view-create-video-routing.module';
import { ViewCreateVideoComponent } from './view-create-video.component';

@NgModule({
  declarations: [
    ViewCreateVideoComponent,
  ],
  imports: [
    CommonModule,
    ViewCreateVideoRoutingModule,
    FormVideoModule,
  ],
  providers: [
    VideoApiService,
    VideoFormDataService
  ]
})
export class ViewCreateVideoModule { }
