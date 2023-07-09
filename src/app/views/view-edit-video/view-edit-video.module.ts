import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormVideoModule } from 'src/app/modules/ui/forms/form-video/form-video.module';
import { ModalConfirmationModule } from 'src/app/modules/ui/modals/modal-confirmation/modal-confirmation.module';
import { VideoDataService } from 'src/app/services/video-data/video-data.service';
import { VideoFormDataService } from 'src/app/services/video-form-data/video-form-data.service';
import { VideoApiService } from 'src/app/services/video-api/video-api.service';

import { ViewEditVideoRoutingModule } from './view-edit-video-routing.module';

import { ViewEditVideoComponent } from './view-edit-video.component';

@NgModule({
  declarations: [
    ViewEditVideoComponent
  ],
  imports: [
    CommonModule,
    ViewEditVideoRoutingModule,
    FormVideoModule,
    ModalConfirmationModule,
  ],
  providers: [
    VideoDataService,
    VideoFormDataService,
    VideoApiService,
  ]
})
export class ViewEditVideoModule { }
