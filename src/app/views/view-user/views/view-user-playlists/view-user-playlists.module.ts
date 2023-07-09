import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistsListDataModule } from 'src/app/modules/data/playlists-list-data/playlists-list-data.module';
import { PlaylistsFormDataModule } from 'src/app/modules/data/playlists-form-data/playlists-form-data.module';
import { PlaylistsModule } from 'src/app/modules/ui/playlists/playlists.module';
import { ViewUserPlaylistsRoutingModule } from './view-user-playlists-routing.module';

import { RouteHandlerService } from './services/route-handler.service';

import { ViewUserPlaylistsComponent } from './view-user-playlists.component';

@NgModule({
  declarations: [
    ViewUserPlaylistsComponent,
  ],
  imports: [
    CommonModule,
    ViewUserPlaylistsRoutingModule,
    PlaylistsListDataModule,
    PlaylistsFormDataModule,
    PlaylistsModule,
  ],
  providers: [
    RouteHandlerService,
  ],
})
export class ViewUserPlaylistsModule { }
