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
    loadChildren: () => import('./views/view-video/view-video.module').then(m => m.ViewVideoModule)
  },
  {
    path: 'playlists',
    loadChildren: () => import('./views/view-playlists/view-playlists.module').then(m => m.ViewPlaylistsModule),
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./views/view-reset-password/view-reset-password.module').then(m => m.ViewResetPasswordModule)
  },
  {
    path: '',
    loadChildren: () => import('./views/view-index/view-index.module').then(m => m.ViewIndexModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
