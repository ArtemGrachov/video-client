import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistApiModule } from '../playlist-api/playlist-api.module';
import { PlaylistFormDataService } from './services/playlist-form-data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PlaylistApiModule,
  ],
  providers: [
    PlaylistFormDataService,
  ],
})
export class PlaylistFormDataModule { }
