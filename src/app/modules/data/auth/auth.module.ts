import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthApiModule } from '../auth-api/auth-api.module';

import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthApiModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
