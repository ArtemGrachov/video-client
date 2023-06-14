import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistsFormDataService } from './services/playlists-form-data.service';
import { PlaylistApiModule } from '../playlist-api/playlist-api.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PlaylistApiModule,
  ],
  providers: [
    PlaylistsFormDataService,
  ],
})
export class PlaylistsFormDataModule { }
