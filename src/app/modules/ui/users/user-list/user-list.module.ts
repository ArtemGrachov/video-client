import { NgModule } from '@angular/core';
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { UserCardModule } from '../user-card/user-card.module';
import { UserCardSkeletonModule } from '../user-card-skeleton/user-card-skeleton.module';

import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [
    UserListComponent,
  ],
  imports: [
    SharedModule,
    UserCardModule,
    UserCardSkeletonModule,
    L10nTranslationModule,
  ],
  exports: [
    UserListComponent,
  ],
})
export class UserListModule { }
