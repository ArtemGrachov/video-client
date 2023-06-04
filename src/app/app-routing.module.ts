import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'video/:id',
    loadChildren: () => import('./views/view-video/view-video.module').then(m => m.ViewVideoModule)
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
