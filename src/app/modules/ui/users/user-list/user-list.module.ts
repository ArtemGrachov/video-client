import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCardModule } from '../user-card/user-card.module';

import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [
    UserListComponent,
  ],
  imports: [
    CommonModule,
    UserCardModule,
  ],
  exports: [
    UserListComponent,
  ],
})
export class UserListModule { }
