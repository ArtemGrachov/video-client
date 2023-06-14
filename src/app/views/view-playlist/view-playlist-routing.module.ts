import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewPlaylistComponent } from './view-playlist.component';
import { viewPlaylistResolver } from './resolvers/view-playlist.resolver';

const routes: Routes = [
  {
    path: '',
    component: ViewPlaylistComponent,
    resolve: { preFetchData: viewPlaylistResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewPlaylistRoutingModule { }
