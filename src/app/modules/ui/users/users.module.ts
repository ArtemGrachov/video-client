import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AvatarModule } from '../other/avatar/avatar.module';

import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserBlockComponent } from './user-block/user-block.component';

@NgModule({
  declarations: [
    UserDetailsComponent,
    UserBlockComponent,
  ],
  imports: [
    CommonModule,
    AvatarModule,
    RouterModule,
  ],
  exports: [
    UserDetailsComponent,
    UserBlockComponent,
  ],
})
export class UsersModule { }
