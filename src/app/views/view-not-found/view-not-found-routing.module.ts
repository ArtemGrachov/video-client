import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewNotFoundComponent } from './view-not-found.component';

const routes: Routes = [{ path: '', component: ViewNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewNotFoundRoutingModule { }
