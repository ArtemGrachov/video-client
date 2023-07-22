import { NgModule } from '@angular/core';
import { L10nTranslationModule } from 'angular-l10n';

import { AUTH_USER_SERVICE } from 'src/app/tokens/auth';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { UserDetailsModule } from 'src/app/modules/ui/users/user-details/user-details.module';
import { ViewProfileRoutingModule } from './view-profile-routing.module';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

import { ViewProfileComponent } from './view-profile.component';

@NgModule({
  declarations: [
    ViewProfileComponent
  ],
  imports: [
    SharedModule,
    ViewProfileRoutingModule,
    UserDetailsModule,
    L10nTranslationModule,
  ],
  providers: [
    { provide: UserDataService, useExisting: AUTH_USER_SERVICE },
  ],
})
export class ViewProfileModule { }
