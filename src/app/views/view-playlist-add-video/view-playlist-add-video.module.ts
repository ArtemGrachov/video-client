import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleModalModule } from '@looorent/ngx-simple-modal';

import { ModalModule } from 'src/app/modules/ui/modal/modal.module';
import { PlaylistsListDataModule } from 'src/app/modules/data/playlists-list-data/playlists-list-data.module';
import { PlaylistsFormDataModule } from 'src/app/modules/data/playlists-form-data/playlists-form-data.module';
import { FormAddToPlaylistModule } from 'src/app/modules/ui/forms/form-add-to-playlist/form-add-to-playlist.module';
import { PlaylistAddVideoDataModule } from 'src/app/modules/data/playlist-add-video-data/playlist-add-video-data.module';

import { ViewPlaylistAddVideoComponent } from './view-playlist-add-video.component';

import { ViewPlaylistAddVideoModalService } from './services/view-playlist-add-video-modal.service';

@NgModule({
  declarations: [
    ViewPlaylistAddVideoComponent
  ],
  imports: [
    CommonModule,
    SimpleModalModule,
    ModalModule,
    PlaylistsListDataModule,
    PlaylistsFormDataModule,
    FormAddToPlaylistModule,
    PlaylistAddVideoDataModule,
  ],
  providers: [
    ViewPlaylistAddVideoModalService,
  ],
})
export class ViewPlaylistAddVideoModule { }
