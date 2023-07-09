import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewUsersComponent } from './view-users.component';
import { viewUsersResolver } from './resolvers/view-users.resolver';

const routes: Routes = [
  {
    path: '',
    component: ViewUsersComponent,
    resolve: { preFetchData: viewUsersResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewUsersRoutingModule { }
