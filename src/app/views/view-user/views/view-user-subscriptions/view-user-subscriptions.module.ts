import { NgModule } from '@angular/core';
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { ViewUserSubscriptionsRoutingModule } from './view-user-subscriptions-routing.module';
import { UserListModule } from 'src/app/modules/ui/users/user-list/user-list.module';
import { PlaceholderModule } from 'src/app/modules/ui/other/placeholder/placeholder.module';
import { UserApiService } from 'src/app/services/user-api/user-api.service';
import { UsersListDataService } from 'src/app/services/users-list-data/users-list-data.service';
import { UsersListFormService } from 'src/app/services/users-list-form/users-list-form.service';
import { RouteHandlerService } from './services/route-handler.service';

import { ViewUserSubscriptionsComponent } from './view-user-subscriptions.component';

@NgModule({
  declarations: [
    ViewUserSubscriptionsComponent,
  ],
  imports: [
    SharedModule,
    ViewUserSubscriptionsRoutingModule,
    UserListModule,
    PlaceholderModule,
    L10nTranslationModule,
  ],
  providers: [
    RouteHandlerService,
    UserApiService,
    UsersListDataService,
    UsersListFormService,
  ],
})
export class ViewUserSubscriptionsModule { }
