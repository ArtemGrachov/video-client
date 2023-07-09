import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarModule } from '../../other/avatar/avatar.module';

import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  declarations: [
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    AvatarModule,
  ],
  exports: [
    UserDetailsComponent,
  ],
})
export class UserDetailsModule { }
