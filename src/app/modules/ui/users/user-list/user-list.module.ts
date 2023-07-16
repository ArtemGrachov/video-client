import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCardModule } from '../user-card/user-card.module';
import { UserCardSkeletonModule } from '../user-card-skeleton/user-card-skeleton.module';

import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [
    UserListComponent,
  ],
  imports: [
    CommonModule,
    UserCardModule,
    UserCardSkeletonModule,
  ],
  exports: [
    UserListComponent,
  ],
})
export class UserListModule { }
