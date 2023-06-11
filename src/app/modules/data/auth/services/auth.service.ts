import { Injectable } from '@angular/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { Observable } from 'rxjs';

import { AUTH_COOKIE_REFRESH_TOKEN_KEY, AUTH_COOKIE_TOKEN_KEY } from 'src/app/constants/auth';

import { UserDataService } from '../../user-data/services/user-data.service';

import { IAuthResponse } from 'src/app/types/api/auth-api.interface';
import { IUser } from 'src/app/types/models/user.interface';
import { IGetUserResponse } from 'src/app/types/api/users-api.interface';

@Injectable()
export class AuthService {
  constructor(
    private cookieService: SsrCookieService,
    private userDataService: UserDataService,
  ) {}

  private isAuthorizedFlag: boolean = Boolean(this.cookieService.get(AUTH_COOKIE_TOKEN_KEY));

  public get isAuthorized(): boolean {
    return this.isAuthorizedFlag;
  }

  public getAuthToken(): string | null {
    return this.cookieService.get(AUTH_COOKIE_TOKEN_KEY) ?? null;
  }

  public authorize(authData: IAuthResponse): void {
    this.cookieService.set(AUTH_COOKIE_TOKEN_KEY, authData.token, 30, '/');
    this.cookieService.set(AUTH_COOKIE_REFRESH_TOKEN_KEY, authData.refreshToken, 30, '/');
    this.isAuthorizedFlag = true;
  }

  public get userDataSnapshot(): IUser | null {
    return this.userDataService.dataSnapshot;
  }

  public get userData$(): Observable<IUser | null> {
    return this.userDataService.data$;
  }

  public getUser(id: number | 'self'): Observable<IGetUserResponse> {
    return this.userDataService.getUser(id);
  }
}
