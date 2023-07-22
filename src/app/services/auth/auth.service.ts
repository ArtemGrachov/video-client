import { Inject, Injectable } from '@angular/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { BehaviorSubject, Observable } from 'rxjs';

import { AUTH_USER_SERVICE } from 'src/app/tokens/auth';

import { AUTH_COOKIE_REFRESH_TOKEN_KEY, AUTH_COOKIE_TOKEN_KEY } from 'src/app/constants/auth';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

import { IAuthResponse } from 'src/app/types/api/auth-api.interface';
import { IUser } from 'src/app/types/models/user.interface';
import { IGetUserResponse } from 'src/app/types/api/users-api.interface';
import * as dayjs from 'dayjs';

@Injectable()
export class AuthService {
  constructor(
    private cookieService: SsrCookieService,
    @Inject(AUTH_USER_SERVICE) private userDataService: UserDataService,
  ) {}

  private _authToken: string | null = this.cookieService.get(AUTH_COOKIE_TOKEN_KEY);

  private _refreshToken: string | null = this.cookieService.get(AUTH_COOKIE_REFRESH_TOKEN_KEY);

  private isAuthorizedFlagSbj$: BehaviorSubject<boolean> = new BehaviorSubject(
    Boolean(this.cookieService.get(AUTH_COOKIE_TOKEN_KEY))
  );

  public isAuthorizedFlag$: Observable<boolean> = this.isAuthorizedFlagSbj$.asObservable();

  public get isAuthorized(): boolean {
    return this.isAuthorizedFlagSbj$.getValue();
  }

  public get authToken(): string | null {
    return this._authToken;
  }

  public get refreshToken(): string | null {
    return this._refreshToken;
  }

  public set authToken(value: string | null) {
    this._authToken = value;

    if (this._authToken) {
      this.cookieService.set(
        AUTH_COOKIE_TOKEN_KEY,
        this._authToken,
        dayjs().add(7, 'days').toDate(),
        '/',
      );
    } else {
      this.cookieService.delete(AUTH_COOKIE_TOKEN_KEY, '/');
    }
  }

  public set refreshToken(value: string | null) {
    this._refreshToken = value;

    if (this._refreshToken) {
      this.cookieService.set(
        AUTH_COOKIE_REFRESH_TOKEN_KEY,
        this._refreshToken,
        dayjs().add(30, 'days').toDate(),
        '/',
      );
    } else {
      this.cookieService.delete(AUTH_COOKIE_REFRESH_TOKEN_KEY, '/');
    }
  }

  public authorize({ token, refreshToken }: IAuthResponse): void {
    this.authToken = token;
    this.refreshToken = refreshToken;
    this.isAuthorizedFlagSbj$.next(true);
  }

  public unauthorize(): void {
    this.authToken = null;
    this.refreshToken = null;
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
