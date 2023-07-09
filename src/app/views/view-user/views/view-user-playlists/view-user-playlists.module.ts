import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistListModule } from 'src/app/modules/ui/playlists/playlist-list/playlist-list.module';
import { ViewUserPlaylistsRoutingModule } from './view-user-playlists-routing.module';
import { PlaylistsListDataService } from 'src/app/services/playlists-list-data/playlists-list-data.service';
import { PlaylistsFormDataService } from 'src/app/services/playlists-form-data/playlists-form-data.service';
import { PlaylistApiService } from 'src/app/services/playlist-api/playlist-api.service';

import { RouteHandlerService } from './services/route-handler.service';

import { ViewUserPlaylistsComponent } from './view-user-playlists.component';

@NgModule({
  declarations: [
    ViewUserPlaylistsComponent,
  ],
  imports: [
    CommonModule,
    ViewUserPlaylistsRoutingModule,
    PlaylistListModule,
  ],
  providers: [
    RouteHandlerService,
    PlaylistsListDataService,
    PlaylistsFormDataService,
    PlaylistApiService,
  ],
})
export class ViewUserPlaylistsModule { }
