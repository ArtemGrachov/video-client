import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewUserComponent } from './view-user.component';

import { viewUserResolver } from './resolvers/view-user.resolver';

const routes: Routes = [{
  path: '',
  component: ViewUserComponent,
  resolve: { preFetchData: viewUserResolver },
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewUserRoutingModule { }