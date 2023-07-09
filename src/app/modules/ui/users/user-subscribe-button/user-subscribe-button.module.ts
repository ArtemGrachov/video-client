import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSubscribeButtonComponent } from './user-subscribe-button.component';

@NgModule({
  declarations: [
    UserSubscribeButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserSubscribeButtonComponent,
  ]
})
export class UserSubscribeButtonModule { }
