import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewUsersRoutingModule } from './view-users-routing.module';
import { UserApiService } from 'src/app/services/user-api/user-api.service';
import { UsersListDataService } from 'src/app/services/users-list-data/users-list-data.service';
import { UsersListFormService } from 'src/app/services/users-list-form/users-list-form.service';
import { RouteHandlerService } from './services/route-handler.service';

import { ViewUsersComponent } from './view-users.component';

@NgModule({
  declarations: [
    ViewUsersComponent,
  ],
  imports: [
    CommonModule,
    ViewUsersRoutingModule
  ],
  providers: [
    RouteHandlerService,
    UserApiService,
    UsersListDataService,
    UsersListFormService,
  ],
})
export class ViewUsersModule { }
