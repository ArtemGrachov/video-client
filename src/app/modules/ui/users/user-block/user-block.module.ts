import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AvatarModule } from '../../other/avatar/avatar.module';

import { UserBlockComponent } from './components/user-block/user-block.component';

@NgModule({
  declarations: [
    UserBlockComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AvatarModule,
  ],
  exports: [
    UserBlockComponent,
  ],
})
export class UserBlockModule { }
