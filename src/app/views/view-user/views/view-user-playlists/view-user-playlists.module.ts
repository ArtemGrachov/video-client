import { NgModule } from '@angular/core';
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { PlaylistListModule } from 'src/app/modules/ui/playlists/playlist-list/playlist-list.module';
import { PlaceholderModule } from 'src/app/modules/ui/other/placeholder/placeholder.module';
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
    SharedModule,
    ViewUserPlaylistsRoutingModule,
    PlaylistListModule,
    PlaceholderModule,
    L10nTranslationModule,
  ],
  providers: [
    RouteHandlerService,
    PlaylistsListDataService,
    PlaylistsFormDataService,
    PlaylistApiService,
  ],
})
export class ViewUserPlaylistsModule { }
