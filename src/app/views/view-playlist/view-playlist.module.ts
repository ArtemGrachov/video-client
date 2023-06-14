import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoListDataModule } from 'src/app/modules/data/video-list-data/video-list-data.module';
import { VideoListFormModule } from 'src/app/modules/data/video-list-form/video-list-form.module';
import { VideoModule } from 'src/app/modules/ui/video/video.module';
import { ViewPlaylistRoutingModule } from './view-playlist-routing.module';
import { PlaylistsModule } from 'src/app/modules/ui/playlists/playlists.module';
import { PlaylistDataModule } from 'src/app/modules/data/playlist-data/playlist-data.module';
import { ModalConfirmationModule } from 'src/app/modules/ui/modals/modal-confirmation/modal-confirmation.module';

import { RouteHandlerService } from './services/route-handler.service';

import { ViewPlaylistComponent } from './view-playlist.component';

@NgModule({
  declarations: [
    ViewPlaylistComponent,
  ],
  imports: [
    CommonModule,
    ViewPlaylistRoutingModule,
    VideoListDataModule,
    VideoListFormModule,
    VideoModule,
    PlaylistsModule,
    PlaylistDataModule,
    ModalConfirmationModule,
  ],
  providers: [
    RouteHandlerService,
  ],
})
export class ViewPlaylistModule { }
