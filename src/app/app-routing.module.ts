import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authOnlyGuard } from './shared/guards/auth-only/auth-only.guard';

const routes: Routes = [
  {
    path: 'video/create',
    loadChildren: () => import('./views/view-create-video/view-create-video.module').then(m => m.ViewCreateVideoModule),
    canActivate: [authOnlyGuard],
  },
  {
    path: 'video/:id/edit',
    loadChildren: () => import('./views/view-edit-video/view-edit-video.module').then(m => m.ViewEditVideoModule),
    canActivate: [authOnlyGuard],
  },
  {
    path: 'video/:id',
    loadChildren: () => import('./views/view-video/view-video.module').then(m => m.ViewVideoModule),
  },
  {
    path: 'playlists/create',
    loadChildren: () => import('./views/view-playlist-create/view-playlist-create.module').then(m => m.ViewPlaylistCreateModule),
    canActivate: [authOnlyGuard],
  },
  {
    path: 'playlists/:id/edit',
    loadChildren: () => import('./views/view-playlist-edit/view-playlist-edit.module').then(m => m.ViewPlaylistEditModule),
    canActivate: [authOnlyGuard],
  },
  {
    path: 'playlists/:id',
    loadChildren: () => import('./views/view-playlist/view-playlist.module').then(m => m.ViewPlaylistModule),
  },
  {
    path: 'playlists',
    loadChildren: () => import('./views/view-playlists/view-playlists.module').then(m => m.ViewPlaylistsModule),
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./views/view-reset-password/view-reset-password.module').then(m => m.ViewResetPasswordModule),
  },
  {
    path: '',
    loadChildren: () => import('./views/view-index/view-index.module').then(m => m.ViewIndexModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./views/view-profile/view-profile.module').then(m => m.ViewProfileModule),
    canActivate: [authOnlyGuard],
  },
  {
    path: 'users/:id',
    loadChildren: () => import('./views/view-user/view-user.module').then(m => m.ViewUserModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./views/view-users/view-users.module').then(m => m.ViewUsersModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./views/view-news/view-news.module').then(m => m.ViewNewsModule),
    canActivate: [authOnlyGuard],
  },
];

const localizedRoutes = [
  ...routes,
  {
    path: 'en',
    children: routes,
  },
  {
    path: 'en/**',
    loadChildren: () => import('./views/view-not-found/view-not-found.module').then(m => m.ViewNotFoundModule),
  },
  {
    path: '**',
    loadChildren: () => import('./views/view-not-found/view-not-found.module').then(m => m.ViewNotFoundModule),
  },
]

@NgModule({
  imports: [
    RouterModule
    .forRoot(
      localizedRoutes,
      {
        initialNavigation: 'enabledBlocking',
      },
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
