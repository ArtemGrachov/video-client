import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewUserSubscribersComponent } from './view-user-subscribers.component';

import { viewUserSubscribersResolver } from './resolvers/view-user-subscribers.resolver';

const routes: Routes = [
  {
    path: '',
    component: ViewUserSubscribersComponent,
    resolve: { preFetchData: viewUserSubscribersResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewUserSubscribersRoutingModule { }
