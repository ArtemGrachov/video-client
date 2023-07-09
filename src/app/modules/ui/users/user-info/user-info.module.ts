import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarModule } from '../../other/avatar/avatar.module';

import { UserInfoComponent } from './components/user-info/user-info.component';

@NgModule({
  declarations: [
    UserInfoComponent,
  ],
  imports: [
    CommonModule,
    AvatarModule,
  ],
  exports: [
    UserInfoComponent,
  ],
})
export class UserInfoModule { }
