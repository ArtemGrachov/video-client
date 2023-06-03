import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewIndexComponent } from './view-index.component';
import { viewIndexResolver } from './resolvers/view-index.resolver';

const routes: Routes = [
  {
    path: '',
    component: ViewIndexComponent,
    resolve: { preFetchData: viewIndexResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewIndexRoutingModule { }
