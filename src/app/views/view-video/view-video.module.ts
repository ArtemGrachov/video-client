import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewVideoRoutingModule } from './view-video-routing.module';
import { ViewVideoComponent } from './view-video.component';

import { VideoDataModule } from 'src/app/modules/data/video-data/video-data.module';
import { PlayerModule } from 'src/app/modules/ui/player/player.module';

@NgModule({
  declarations: [
    ViewVideoComponent
  ],
  imports: [
    CommonModule,
    ViewVideoRoutingModule,
    VideoDataModule,
    PlayerModule
  ]
})
export class ViewVideoModule {}
