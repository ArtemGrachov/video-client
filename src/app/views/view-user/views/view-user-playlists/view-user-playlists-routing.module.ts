import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewUserPlaylistsComponent } from './view-user-playlists.component';

const routes: Routes = [{ path: '', component: ViewUserPlaylistsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewUserPlaylistsRoutingModule { }
