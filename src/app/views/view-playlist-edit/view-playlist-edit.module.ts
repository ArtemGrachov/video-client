import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewPlaylistEditRoutingModule } from './view-playlist-edit-routing.module';
import { PlaylistFormDataModule } from 'src/app/modules/data/playlist-form-data/playlist-form-data.module';
import { FormPlaylistModule } from 'src/app/modules/ui/forms/form-playlist/form-playlist.module';
import { PlaylistDataModule } from 'src/app/modules/data/playlist-data/playlist-data.module';

import { ViewPlaylistEditComponent } from './view-playlist-edit.component';

@NgModule({
  declarations: [
    ViewPlaylistEditComponent
  ],
  imports: [
    CommonModule,
    ViewPlaylistEditRoutingModule,
    PlaylistFormDataModule,
    FormPlaylistModule,
    PlaylistDataModule,
  ],
})
export class ViewPlaylistEditModule { }
