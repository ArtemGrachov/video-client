import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthApiService } from 'src/app/services/auth-api/auth-api.service';
import { RefreshTokenDataService } from 'src/app/services/refresh-token-data/refresh-token-data.service';
import { AuthInterceptorInterceptor } from 'src/app/interceptors/auth/auth-interceptor.interceptor';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
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
