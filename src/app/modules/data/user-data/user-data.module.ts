import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserApiModule } from '../user-api/user-api.module';

import { UserDataService } from './services/user-data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserApiModule,
  ],
  providers: [
    UserDataService,
  ],
})
export class UserDataModule { }
