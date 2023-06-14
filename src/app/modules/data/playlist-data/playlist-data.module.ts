import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistDataService } from './services/playlist-data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PlaylistDataService,
  ],
})
export class PlaylistDataModule { }
