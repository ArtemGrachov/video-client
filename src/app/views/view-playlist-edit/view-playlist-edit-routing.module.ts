import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewPlaylistEditComponent } from './view-playlist-edit.component';
import { viewPlaylistEditResolver } from './resolvers/view-playlist-edit.resolver';

const routes: Routes = [
  {
    path: '',
    component: ViewPlaylistEditComponent,
    resolve: { preFetchData: viewPlaylistEditResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewPlaylistEditRoutingModule { }
