import { NgModule } from '@angular/core';
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { ViewPlaylistEditRoutingModule } from './view-playlist-edit-routing.module';
import { FormPlaylistModule } from 'src/app/modules/ui/forms/form-playlist/form-playlist.module';
import { PlaylistDataService } from 'src/app/services/playlist-data/playlist-data.service';
import { PlaylistApiService } from 'src/app/services/playlist-api/playlist-api.service';
import { PlaylistFormDataService } from 'src/app/services/playlist-form-data/playlist-form-data.service';

import { ViewPlaylistEditComponent } from './view-playlist-edit.component';

@NgModule({
  declarations: [
    ViewPlaylistEditComponent
  ],
  imports: [
    SharedModule,
    ViewPlaylistEditRoutingModule,
    FormPlaylistModule,
    L10nTranslationModule,
  ],
  providers: [
    PlaylistFormDataService,
    PlaylistDataService,
    PlaylistApiService,
  ]
})
export class ViewPlaylistEditModule { }
