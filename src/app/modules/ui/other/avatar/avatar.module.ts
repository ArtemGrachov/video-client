import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';

import { AvatarComponent } from './components/avatar/avatar.component';

@NgModule({
  declarations: [
    AvatarComponent
  ],
  exports: [
    AvatarComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class AvatarModule { }
