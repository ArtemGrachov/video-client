import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoDataModule } from 'src/app/modules/data/video-data/video-data.module';
import { FormVideoModule } from 'src/app/modules/ui/forms/form-video/form-video.module';
import { VideoFormDataModule } from 'src/app/modules/data/video-form-data/video-form-data.module';
import { ModalConfirmationModule } from 'src/app/modules/ui/modals/modal-confirmation/modal-confirmation.module';

import { ViewEditVideoRoutingModule } from './view-edit-video-routing.module';

import { ViewEditVideoComponent } from './view-edit-video.component';

@NgModule({
  declarations: [
    ViewEditVideoComponent
  ],
  imports: [
    CommonModule,
    ViewEditVideoRoutingModule,
    VideoDataModule,
    FormVideoModule,
    VideoFormDataModule,
    ModalConfirmationModule,
  ]
})
export class ViewEditVideoModule { }
