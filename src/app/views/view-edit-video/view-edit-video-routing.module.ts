import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { videoResolver } from './resolvers/video.resolver';

import { ViewEditVideoComponent } from './view-edit-video.component';

const routes: Routes = [
  {
    path: '',
    component: ViewEditVideoComponent,
    resolve: { preFetchData: videoResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewEditVideoRoutingModule { }
