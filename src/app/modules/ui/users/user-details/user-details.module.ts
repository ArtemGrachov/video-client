import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { AvatarModule } from '../../other/avatar/avatar.module';

import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  declarations: [
    UserDetailsComponent,
  ],
  imports: [
    SharedModule,
    AvatarModule,
  ],
  exports: [
    UserDetailsComponent,
  ],
})
export class UserDetailsModule { }
