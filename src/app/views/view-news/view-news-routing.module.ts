import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { viewNewsResolver } from './resolvers/view-news.resolver';

import { ViewNewsComponent } from './view-news.component';

const routes: Routes = [
  {
    path: '',
    component: ViewNewsComponent,
    resolve: { preFetchData: viewNewsResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewNewsRoutingModule { }
