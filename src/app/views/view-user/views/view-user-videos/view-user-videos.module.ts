import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewUserVideosRoutingModule } from './view-user-videos-routing.module';

import { ViewUserVideosComponent } from './view-user-videos.component';

@NgModule({
  declarations: [
    ViewUserVideosComponent
  ],
  imports: [
    CommonModule,
    ViewUserVideosRoutingModule
  ]
})
export class ViewUserVideosModule { }
