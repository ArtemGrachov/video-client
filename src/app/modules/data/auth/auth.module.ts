import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthApiModule } from '../auth-api/auth-api.module';
import { UserDataModule } from '../user-data/user-data.module';

import { AuthService } from './services/auth.service';
import { AuthInterceptorInterceptor } from './services/auth-interceptor.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthApiModule,
    UserDataModule,
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true
    }
  ]
})
export class AuthModule { }
