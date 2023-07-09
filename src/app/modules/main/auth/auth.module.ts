import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthApiService } from 'src/app/services/auth-api/auth-api.service';
import { RefreshTokenDataService } from 'src/app/services/refresh-token-data/refresh-token-data.service';
import { AuthInterceptorInterceptor } from 'src/app/interceptors/auth/auth-interceptor.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    AuthApiService,
    RefreshTokenDataService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true
    }
  ]
})
export class AuthModule { }
