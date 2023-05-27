import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoDataModule } from 'src/app/modules/video-data/video-data.module';
import { VideoModule } from 'src/app/modules/video/video.module';
import { VideoListFormModule } from 'src/app/modules/video-list-form/video-list-form.module';

import { ViewIndexRoutingModule } from './view-index-routing.module';
import { ViewIndexComponent } from './view-index.component';

@NgModule({
  declarations: [
    ViewIndexComponent
  ],
  imports: [
    CommonModule,
    ViewIndexRoutingModule,
    VideoDataModule,
    VideoModule,
    VideoListFormModule
  ]
})
export class ViewIndexModule { }
