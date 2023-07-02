import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDataModule } from 'src/app/modules/data/user-data/user-data.module';
import { UsersModule } from 'src/app/modules/ui/users/users.module';
import { ViewUserRoutingModule } from './view-user-routing.module';

import { ViewUserComponent } from './view-user.component';
import { ViewUserVideosModule } from './views/view-user-videos/view-user-videos.module';

@NgModule({
  declarations: [
    ViewUserComponent,
  ],
  imports: [
    CommonModule,
    ViewUserRoutingModule,
    UserDataModule,
    UsersModule,
    ViewUserVideosModule,
  ],
})
export class ViewUserModule { }
