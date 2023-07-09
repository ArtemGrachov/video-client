import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInfoModule } from 'src/app/modules/ui/users/user-info/user-info.module';
import { ViewUserRoutingModule } from './view-user-routing.module';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { UserApiService } from 'src/app/services/user-api/user-api.service';
import { UserSubscribeButtonModule } from 'src/app/modules/ui/users/user-subscribe-button/user-subscribe-button.module';

import { ViewUserComponent } from './view-user.component';

@NgModule({
  declarations: [
    ViewUserComponent,
  ],
  imports: [
    CommonModule,
    ViewUserRoutingModule,
    UserInfoModule,
    UserSubscribeButtonModule,
  ],
  providers: [
    UserDataService,
    UserApiService,
  ]
})
export class ViewUserModule { }
