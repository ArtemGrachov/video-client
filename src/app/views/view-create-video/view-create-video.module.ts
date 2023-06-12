import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewCreateVideoRoutingModule } from './view-create-video-routing.module';
import { ViewCreateVideoComponent } from './view-create-video.component';


@NgModule({
  declarations: [
    ViewCreateVideoComponent
  ],
  imports: [
    CommonModule,
    ViewCreateVideoRoutingModule
  ]
})
export class ViewCreateVideoModule { }
