import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewUserVideosComponent } from './view-user-videos.component';

import { viewUserVideosResolver } from './resolvers/view-user-videos.resolver';

const routes: Routes = [
  {
    path: '',
    component: ViewUserVideosComponent,
    resolve: { preFetchData: viewUserVideosResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewUserVideosRoutingModule { }
