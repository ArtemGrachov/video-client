import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewProfileRoutingModule } from './view-profile-routing.module';
import { UsersModule } from 'src/app/modules/ui/users/users.module';

import { ViewProfileComponent } from './view-profile.component';

@NgModule({
  declarations: [
    ViewProfileComponent
  ],
  imports: [
    CommonModule,
    ViewProfileRoutingModule,
    UsersModule,
  ]
})
export class ViewProfileModule { }
