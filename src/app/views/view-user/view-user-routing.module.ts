import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewUserComponent } from './view-user.component';

import { viewUserResolver } from './resolvers/view-user.resolver';

const routes: Routes = [
  {
    path: '',
    component: ViewUserComponent,
    resolve: { preFetchData: viewUserResolver },
    children: [
      {
        path: '',
        loadChildren: () => import('./views/view-user-videos/view-user-videos.module').then(m => m.ViewUserVideosModule),
      },
      {
        path: 'playlists',
        loadChildren: () => import('./views/view-user-playlists/view-user-playlists.module').then(m => m.ViewUserPlaylistsModule),
      },
      {
        path: 'subscriptions',
        loadChildren: () => import('./views/view-user-subscriptions/view-user-subscriptions.module').then(m => m.ViewUserSubscriptionsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewUserRoutingModule { }
