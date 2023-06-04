import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewResetPasswordComponent } from './view-reset-password.component';

const routes: Routes = [{ path: ':token', component: ViewResetPasswordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewResetPasswordRoutingModule { }
