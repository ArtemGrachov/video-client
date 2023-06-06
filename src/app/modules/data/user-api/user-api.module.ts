import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserApiService } from './services/user-api.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    UserApiService,
  ],
})
export class UserApiModule { }
