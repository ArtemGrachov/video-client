import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { EMPTY, Observable, catchError, filter, map, of, switchMap, take, tap, throwError } from 'rxjs';
import { Response } from 'express';
import { RESPONSE } from '@nguniversal/express-engine/tokens';


import { EStatus } from 'src/app/constants/status';
import { TOKEN_NO_AUTH, TOKEN_REFRESH_REQUEST } from 'src/app/constants/http';
import { AUTH_COOKIE_REFRESH_TOKEN_KEY, AUTH_COOKIE_TOKEN_KEY } from 'src/app/constants/auth';

import { RefreshTokenDataService } from 'src/app/services/refresh-token-data/refresh-token-data.service';
import { AuthService } from 'src/app/services/auth/auth.service';

import { IAuthResponse } from 'src/app/types/api/auth-api.interface';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private refreshTokenDataService: RefreshTokenDataService,
    @Optional() @Inject(RESPONSE) private response?: Response,
  ) {}

  private tokenRefreshing$: Observable<EStatus> = this.refreshTokenDataService.refreshStatus$;

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authReq = this.setRequestAuthHeaders(request);

    return next
      .handle(authReq)
      .pipe(
        catchError((err: any) => {
          if (
            err?.status !== 401 ||
            request.context.get(TOKEN_REFRESH_REQUEST) ||
            request.context.get(TOKEN_NO_AUTH)) {
            return throwError(() => err);
          }

          return this
            .expiredTokenHandler()
            .pipe(switchMap(result => {
              if (result) {
                return next.handle(this.setRequestAuthHeaders(request));
              }

              return EMPTY;
            }))
        })
      );
  }

  private setRequestAuthHeaders(request: HttpRequest<unknown>): HttpRequest<unknown> {
    if (request.context.get(TOKEN_NO_AUTH)) {
      return request;
    }

    const authToken = this.authService.authToken;

    if (!authToken) {
      return request;
    }

    return request.clone({
      headers: request.headers.set('Authorization', `Bearer ${authToken}`),
    });
  }

  private expiredTokenHandler(): Observable<boolean> {
    const refreshToken = this.authService.refreshToken;

    if (refreshToken) {
      return this
        .tokenRefreshing$
        .pipe(
          take(1),
          switchMap((status) => {
            switch (status) {
              case EStatus.PROCESSING: {
                return this
                  .tokenRefreshing$
                  .pipe(
                    take(1),
                    filter(st => st === EStatus.SUCCESS),
                    map(() => true)
                  );
              }
              case EStatus.SUCCESS: {
                return of(true);
              }
              default: {
                return this
                  .refreshAuthToken(refreshToken)
                  .pipe(map(() => true));
              }
            }
          }),
          catchError(() => {
            this.unauthorize();
            return of(false);
          }),
        );
    }

    this.unauthorize();

    return of(false);
  }

  private unauthorize(): void {
    this.authService.unauthorize();

    if (typeof window === 'undefined') {
      this.response!.status(302);
      this.response!.setHeader('Location', '/');
      this.response?.clearCookie(AUTH_COOKIE_TOKEN_KEY);
      this.response?.clearCookie(AUTH_COOKIE_REFRESH_TOKEN_KEY);
    } else {
      window.location.reload();
    }
  }

  private refreshAuthToken(refreshToken: string): Observable<IAuthResponse> {
    return this
      .refreshTokenDataService
      .refreshToken({ refreshToken })
      .pipe(
        tap((res) => this.authService.authorize(res)),
        catchError((err) => {
          this.authService.unauthorize();
          return throwError(() => err);
        })
      );
  }
}
