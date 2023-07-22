import { NgModule } from '@angular/core';

import { ViewPlaylistsRoutingModule } from './view-playlists-routing.module';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { PlaylistListModule } from 'src/app/modules/ui/playlists/playlist-list/playlist-list.module';
import { PlaceholderModule } from 'src/app/modules/ui/other/placeholder/placeholder.module';
import { RouteHandlerService } from './services/route-handler.service';
import { PlaylistsListDataService } from 'src/app/services/playlists-list-data/playlists-list-data.service';
import { PlaylistsFormDataService } from 'src/app/services/playlists-form-data/playlists-form-data.service';
import { PlaylistApiService } from 'src/app/services/playlist-api/playlist-api.service';

import { ViewPlaylistsComponent } from './view-playlists.component';

@NgModule({
  declarations: [
    ViewPlaylistsComponent,
  ],
  imports: [
    SharedModule,
    ViewPlaylistsRoutingModule,
    PlaylistListModule,
    PlaceholderModule,
  ],
  providers: [
    RouteHandlerService,
    PlaylistsListDataService,
    PlaylistsFormDataService,
    PlaylistApiService,
  ],
})
export class ViewPlaylistsModule { }
