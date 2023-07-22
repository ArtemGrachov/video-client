import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { AvatarModule } from '../../other/avatar/avatar.module';

import { UserBlockComponent } from './components/user-block/user-block.component';

@NgModule({
  declarations: [
    UserBlockComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    AvatarModule,
  ],
  exports: [
    UserBlockComponent,
  ],
})
export class UserBlockModule { }
