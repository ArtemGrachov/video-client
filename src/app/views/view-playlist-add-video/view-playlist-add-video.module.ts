import { NgModule } from '@angular/core';
import { SimpleModalModule } from '@looorent/ngx-simple-modal';
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { ModalModule } from 'src/app/modules/ui/modal/modal.module';
import { FormAddToPlaylistModule } from 'src/app/modules/ui/forms/form-add-to-playlist/form-add-to-playlist.module';
import { PlaylistsListDataService } from 'src/app/services/playlists-list-data/playlists-list-data.service';
import { PlaylistsFormDataService } from 'src/app/services/playlists-form-data/playlists-form-data.service';
import { PlaylistAddVideoDataService } from 'src/app/services/playlist-add-video-data/playlist-add-video-data.service';
import { PlaylistApiService } from 'src/app/services/playlist-api/playlist-api.service';

import { ViewPlaylistAddVideoComponent } from './view-playlist-add-video.component';

import { ViewPlaylistAddVideoModalService } from './services/view-playlist-add-video-modal.service';

@NgModule({
  declarations: [
    ViewPlaylistAddVideoComponent,
  ],
  imports: [
    SharedModule,
    SimpleModalModule,
    ModalModule,
    FormAddToPlaylistModule,
    L10nTranslationModule,
  ],
  providers: [
    ViewPlaylistAddVideoModalService,
    PlaylistsListDataService,
    PlaylistsFormDataService,
    PlaylistAddVideoDataService,
    PlaylistApiService,
  ],
})
export class ViewPlaylistAddVideoModule { }
