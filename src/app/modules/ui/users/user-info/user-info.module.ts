import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { AvatarModule } from '../../other/avatar/avatar.module';

import { UserInfoComponent } from './components/user-info/user-info.component';

@NgModule({
  declarations: [
    UserInfoComponent,
  ],
  imports: [
    SharedModule,
    AvatarModule,
  ],
  exports: [
    UserInfoComponent,
  ],
})
export class UserInfoModule { }
