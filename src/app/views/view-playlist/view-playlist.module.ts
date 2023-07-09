import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoModule } from 'src/app/modules/ui/video/video.module';
import { ViewPlaylistRoutingModule } from './view-playlist-routing.module';
import { PlaylistsModule } from 'src/app/modules/ui/playlists/playlists.module';
import { ModalConfirmationModule } from 'src/app/modules/ui/modals/modal-confirmation/modal-confirmation.module';
import { VideoListDataService } from 'src/app/services/video-list-data/video-list-data.service';
import { VideoListFormService } from 'src/app/services/video-list-form/video-list-form.service';
import { PlaylistDataService } from 'src/app/services/playlist-data/playlist-data.service';
import { PlaylistApiService } from 'src/app/services/playlist-api/playlist-api.service';
import { VideoApiService } from 'src/app/services/video-api/video-api.service';

import { RouteHandlerService } from './services/route-handler.service';

import { ViewPlaylistComponent } from './view-playlist.component';

@NgModule({
  declarations: [
    ViewPlaylistComponent,
  ],
  imports: [
    CommonModule,
    ViewPlaylistRoutingModule,
    VideoModule,
    PlaylistsModule,
    ModalConfirmationModule,
  ],
  providers: [
    RouteHandlerService,
    VideoListDataService,
    VideoListFormService,
    PlaylistDataService,
    PlaylistApiService,
    VideoApiService,
  ],
})
export class ViewPlaylistModule { }
