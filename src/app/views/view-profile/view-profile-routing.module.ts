import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProfileComponent } from './view-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ViewProfileComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/profile-edit/profile-edit.module').then(m => m.ProfileEditModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewProfileRoutingModule { }
