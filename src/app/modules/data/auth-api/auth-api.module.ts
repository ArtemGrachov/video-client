import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthApiService } from './services/auth-api.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthApiService
  ]
})
export class AuthApiModule { }
