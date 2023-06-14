import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistApiService } from './services/playlist-api.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PlaylistApiService,
  ],
})
export class PlaylistApiModule { }
