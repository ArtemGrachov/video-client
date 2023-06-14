import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistFormDataModule } from 'src/app/modules/data/playlist-form-data/playlist-form-data.module';
import { FormPlaylistModule } from 'src/app/modules/ui/forms/form-playlist/form-playlist.module';

import { ViewPlaylistCreateRoutingModule } from './view-playlist-create-routing.module';
import { ViewPlaylistCreateComponent } from './view-playlist-create.component';

@NgModule({
  declarations: [
    ViewPlaylistCreateComponent
  ],
  imports: [
    CommonModule,
    ViewPlaylistCreateRoutingModule,
    PlaylistFormDataModule,
    FormPlaylistModule,
  ],
})
export class ViewPlaylistCreateModule { }
