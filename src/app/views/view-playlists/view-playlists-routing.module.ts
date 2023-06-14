import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewPlaylistsComponent } from './view-playlists.component';

import { viewPlaylistsResolver } from './resolvers/view-playlists.resolver';

const routes: Routes = [
  {
    path: '',
    component: ViewPlaylistsComponent,
    resolve: { preFetchData: viewPlaylistsResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewPlaylistsRoutingModule { }
