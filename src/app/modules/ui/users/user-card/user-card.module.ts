import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarModule } from '../../other/avatar/avatar.module';

import { UserCardComponent } from './components/user-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UserCardComponent,
  ],
  imports: [
    CommonModule,
    AvatarModule,
    RouterModule,
  ],
  exports: [
    UserCardComponent,
  ],
})
export class UserCardModule { }
