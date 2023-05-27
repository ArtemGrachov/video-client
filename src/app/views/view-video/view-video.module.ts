import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewVideoRoutingModule } from './view-video-routing.module';
import { ViewVideoComponent } from './view-video.component';


@NgModule({
  declarations: [
    ViewVideoComponent
  ],
  imports: [
    CommonModule,
    ViewVideoRoutingModule
  ]
})
export class ViewVideoModule { }
