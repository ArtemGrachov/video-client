import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';

import { UserSubscribeButtonComponent } from './user-subscribe-button.component';

@NgModule({
  declarations: [
    UserSubscribeButtonComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    UserSubscribeButtonComponent,
  ]
})
export class UserSubscribeButtonModule { }
