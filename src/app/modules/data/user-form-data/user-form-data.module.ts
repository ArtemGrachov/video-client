import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFormDataService } from './services/user-form-data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    UserFormDataService,
  ],
})
export class UserFormDataModule { }
