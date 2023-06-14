import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPlaylistsComponent } from './view-playlists.component';

const routes: Routes = [{ path: '', component: ViewPlaylistsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewPlaylistsRoutingModule { }
