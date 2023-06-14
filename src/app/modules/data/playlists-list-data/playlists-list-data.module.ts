import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistsListDataService } from './services/playlists-list-data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PlaylistsListDataService,
  ],
})
export class PlaylistsListDataModule { }
