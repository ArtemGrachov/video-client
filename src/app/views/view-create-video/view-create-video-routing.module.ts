import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ViewCreateVideoComponent } from './view-create-video.component';

const routes: Routes = [{ path: '', component: ViewCreateVideoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewCreateVideoRoutingModule { }
