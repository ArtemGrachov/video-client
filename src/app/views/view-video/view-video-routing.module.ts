import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewVideoComponent } from './view-video.component';

import { viewVideoResolver } from './resolvers/view-video.resolver';

const routes: Routes = [
  {
    path: '',
    component: ViewVideoComponent,
    resolve: { preFetchData: viewVideoResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewVideoRoutingModule { }
