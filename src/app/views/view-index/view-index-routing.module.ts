import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewIndexComponent } from './view-index.component';

const routes: Routes = [{ path: '', component: ViewIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewIndexRoutingModule { }
