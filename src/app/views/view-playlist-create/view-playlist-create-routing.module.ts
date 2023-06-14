import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPlaylistCreateComponent } from './view-playlist-create.component';

const routes: Routes = [{ path: '', component: ViewPlaylistCreateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewPlaylistCreateRoutingModule { }
