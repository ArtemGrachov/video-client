import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsModule } from 'src/app/modules/ui/users/user-details/user-details.module';
import { ViewProfileRoutingModule } from './view-profile-routing.module';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

import { ViewProfileComponent } from './view-profile.component';

@NgModule({
  declarations: [
    ViewProfileComponent
  ],
  imports: [
    CommonModule,
    ViewProfileRoutingModule,
    UserDetailsModule,
  ],
  providers: [
    { provide: UserDataService, useExisting: 'MAIN_USER_SERVICE' },
  ],
})
export class ViewProfileModule { }
