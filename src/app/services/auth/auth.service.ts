import { Inject, Injectable } from '@angular/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { BehaviorSubject, Observable } from 'rxjs';

import { AUTH_USER_SERVICE } from 'src/app/tokens/auth';

import { AUTH_COOKIE_REFRESH_TOKEN_KEY, AUTH_COOKIE_TOKEN_KEY } from 'src/app/constants/auth';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

import { IAuthResponse } from 'src/app/types/api/auth-api.interface';
import { IUser } from 'src/app/types/models/user.interface';
import { IGetUserResponse } from 'src/app/types/api/users-api.interface';

@Injectable()
export class AuthService {
  constructor(
    private cookieService: SsrCookieService,
    @Inject(AUTH_USER_SERVICE) private userDataService: UserDataService,
  ) {}

  private isAuthorizedFlagSbj$: BehaviorSubject<boolean> = new BehaviorSubject(
    Boolean(this.cookieService.get(AUTH_COOKIE_TOKEN_KEY))
  );

  public isAuthorizedFlag$: Observable<boolean> = this.isAuthorizedFlagSbj$.asObservable();

  public get isAuthorized(): boolean {
    return this.isAuthorizedFlagSbj$.getValue();
  }

  public getAuthToken(): string | null {
    return this.cookieService.get(AUTH_COOKIE_TOKEN_KEY) ?? null;
  }

  public getRefreshToken(): string | null {
    return this.cookieService.get(AUTH_COOKIE_REFRESH_TOKEN_KEY) ?? null;
  }

  public authorize(authData: IAuthResponse): void {
    this.cookieService.set(AUTH_COOKIE_TOKEN_KEY, authData.token, 30, '/');
    this.cookieService.set(AUTH_COOKIE_REFRESH_TOKEN_KEY, authData.refreshToken, 30, '/');
    this.isAuthorizedFlagSbj$.next(true);
  }

  public unauthorize(): void {
    this.cookieService.delete(AUTH_COOKIE_TOKEN_KEY, '/');
    this.cookieService.delete(AUTH_COOKIE_REFRESH_TOKEN_KEY, '/');
    this.isAuthorizedFlagSbj$.next(false);
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