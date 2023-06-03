import { Injectable } from '@angular/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

import { AUTH_COOKIE_REFRESH_TOKEN_KEY, AUTH_COOKIE_TOKEN_KEY } from 'src/app/constants/auth';

import { IAuthResponse } from 'src/app/types/api/auth-api.interface';

@Injectable()
export class AuthService {
  constructor(private cookieService: SsrCookieService) {}

  public getAuthToken(): string | null {
    return this.cookieService.get(AUTH_COOKIE_TOKEN_KEY) ?? null;
  }

  public authorize(authData: IAuthResponse): void {
    this.cookieService.set(AUTH_COOKIE_TOKEN_KEY, authData.token);
    this.cookieService.set(AUTH_COOKIE_REFRESH_TOKEN_KEY, authData.refreshToken);
  }
}
