import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersModule } from 'src/app/modules/ui/users/users.module';
import { ViewUserRoutingModule } from './view-user-routing.module';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { UserApiService } from 'src/app/services/user-api/user-api.service';

import { ViewUserComponent } from './view-user.component';

@NgModule({
  declarations: [
    ViewUserComponent,
  ],
  imports: [
    CommonModule,
    ViewUserRoutingModule,
    UsersModule,
  ],
  providers: [
    UserDataService,
    UserApiService,
  ]
})
export class ViewUserModule { }
