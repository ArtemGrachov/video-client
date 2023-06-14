import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewPlaylistsRoutingModule } from './view-playlists-routing.module';
import { ViewPlaylistsComponent } from './view-playlists.component';


@NgModule({
  declarations: [
    ViewPlaylistsComponent
  ],
  imports: [
    CommonModule,
    ViewPlaylistsRoutingModule
  ]
})
export class ViewPlaylistsModule { }
