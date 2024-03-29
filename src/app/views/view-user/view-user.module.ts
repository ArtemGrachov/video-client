import { NgModule } from '@angular/core';
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
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
    SharedModule,
    ViewUserRoutingModule,
    UserInfoModule,
    UserSubscribeButtonModule,
    L10nTranslationModule,
  ],
  providers: [
    UserDataService,
    UserApiService,
  ]
})
export class ViewUserModule { }
