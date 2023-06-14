import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewPlaylistsRoutingModule } from './view-playlists-routing.module';

import { PlaylistsModule } from 'src/app/modules/ui/playlists/playlists.module';
import { PlaylistsListDataModule } from 'src/app/modules/data/playlists-list-data/playlists-list-data.module';
import { PlaylistsFormDataModule } from 'src/app/modules/data/playlists-form-data/playlists-form-data.module';
import { RouteHandlerService } from './services/route-handler.service';

import { ViewPlaylistsComponent } from './view-playlists.component';

@NgModule({
  declarations: [
    ViewPlaylistsComponent,
  ],
  imports: [
    CommonModule,
    ViewPlaylistsRoutingModule,
    PlaylistsListDataModule,
    PlaylistsFormDataModule,
    PlaylistsModule,
  ],
  providers: [
    RouteHandlerService,
  ],
})
export class ViewPlaylistsModule { }
