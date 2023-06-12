import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormVideoModule } from 'src/app/modules/ui/forms/form-video/form-video.module';
import { VideoFormDataModule } from 'src/app/modules/data/video-form-data/video-form-data.module';

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
    VideoFormDataModule,
  ]
})
export class ViewCreateVideoModule { }
