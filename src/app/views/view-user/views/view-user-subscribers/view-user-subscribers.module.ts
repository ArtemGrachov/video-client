import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewUserSubscribersRoutingModule } from './view-user-subscribers-routing.module';
import { UserListModule } from 'src/app/modules/ui/users/user-list/user-list.module';
import { UserApiService } from 'src/app/services/user-api/user-api.service';
import { UsersListDataService } from 'src/app/services/users-list-data/users-list-data.service';
import { UsersListFormService } from 'src/app/services/users-list-form/users-list-form.service';
import { RouteHandlerService } from './services/route-handler.service';

import { ViewUserSubscribersComponent } from './view-user-subscribers.component';

@NgModule({
  declarations: [
    ViewUserSubscribersComponent,
  ],
  imports: [
    CommonModule,
    ViewUserSubscribersRoutingModule,
    UserListModule,
  ],
  providers: [
    RouteHandlerService,
    UserApiService,
    UsersListDataService,
    UsersListFormService,
  ],
})
export class ViewUserSubscribersModule { }
