import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewProfileRoutingModule } from './view-profile-routing.module';
import { UsersModule } from 'src/app/modules/ui/users/users.module';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

import { ViewProfileComponent } from './view-profile.component';

@NgModule({
  declarations: [
    ViewProfileComponent
  ],
  imports: [
    CommonModule,
    ViewProfileRoutingModule,
    UsersModule,
  ],
  providers: [
    { provide: UserDataService, useExisting: 'MAIN_USER_SERVICE' },
  ],
})
export class ViewProfileModule { }
