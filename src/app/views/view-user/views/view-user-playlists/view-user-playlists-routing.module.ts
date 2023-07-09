import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewUserPlaylistsComponent } from './view-user-playlists.component';

import { viewUserPlaylistsResolver } from './resolvers/view-user-playlists.resolver';

const routes: Routes = [
  {
    path: '',
    component: ViewUserPlaylistsComponent,
    resolve: { preFetchData: viewUserPlaylistsResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewUserPlaylistsRoutingModule { }
