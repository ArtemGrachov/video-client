import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleModalModule } from '@looorent/ngx-simple-modal';

import { ModalModule } from 'src/app/modules/ui/modal/modal.module';
import { PlaylistsListDataModule } from 'src/app/modules/data/playlists-list-data/playlists-list-data.module';
import { PlaylistsFormDataModule } from 'src/app/modules/data/playlists-form-data/playlists-form-data.module';

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
  ],
  providers: [
    ViewPlaylistAddVideoModalService,
  ],
})
export class ViewPlaylistAddVideoModule { }
