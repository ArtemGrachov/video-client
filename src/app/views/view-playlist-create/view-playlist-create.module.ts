import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormPlaylistModule } from 'src/app/modules/ui/forms/form-playlist/form-playlist.module';
import { PlaylistFormDataService } from 'src/app/services/playlist-form-data/playlist-form-data.service';
import { PlaylistApiService } from 'src/app/services/playlist-api/playlist-api.service';

import { ViewPlaylistCreateRoutingModule } from './view-playlist-create-routing.module';
import { ViewPlaylistCreateComponent } from './view-playlist-create.component';

@NgModule({
  declarations: [
    ViewPlaylistCreateComponent
  ],
  imports: [
    CommonModule,
    ViewPlaylistCreateRoutingModule,
    FormPlaylistModule,
  ],
  providers: [
    PlaylistFormDataService,
    PlaylistApiService,
  ]
})
export class ViewPlaylistCreateModule { }
