import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewUserVideosComponent } from './view-user-videos.component';

const routes: Routes = [{ path: '', component: ViewUserVideosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewUserVideosRoutingModule { }
