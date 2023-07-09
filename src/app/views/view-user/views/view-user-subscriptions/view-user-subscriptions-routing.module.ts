import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewUserSubscriptionsComponent } from './view-user-subscriptions.component';

import { viewUserSubscriptionsResolver } from './resolvers/view-user-subscriptions.resolver';

const routes: Routes = [
  {
    path: '',
    component: ViewUserSubscriptionsComponent,
    resolve: { preFetchData: viewUserSubscriptionsResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewUserSubscriptionsRoutingModule { }
