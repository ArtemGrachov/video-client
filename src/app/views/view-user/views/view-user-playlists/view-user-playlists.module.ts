import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewUserPlaylistsRoutingModule } from './view-user-playlists-routing.module';

import { ViewUserPlaylistsComponent } from './view-user-playlists.component';

@NgModule({
  declarations: [
    ViewUserPlaylistsComponent
  ],
  imports: [
    CommonModule,
    ViewUserPlaylistsRoutingModule
  ]
})
export class ViewUserPlaylistsModule { }
