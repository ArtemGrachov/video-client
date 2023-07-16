import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, catchError, filter, map, of, switchMap, take, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

import { EStatus } from 'src/app/constants/status';
import { TOKEN_NO_AUTH, TOKEN_REFRESH_REQUEST } from 'src/app/constants/http';

import { RefreshTokenDataService } from 'src/app/services/refresh-token-data/refresh-token-data.service';
import { AuthService } from 'src/app/services/auth/auth.service';

import { IAuthResponse } from 'src/app/types/api/auth-api.interface';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router,
    private refreshTokenDataService: RefreshTokenDataService,
  ) {}

  private tokenRefreshing$: Observable<EStatus> = this.refreshTokenDataService.refreshStatus$;

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authReq = this.setRequestAuthHeaders(request);

    return next
      .handle(authReq)
      .pipe(
        catchError((err: any) => {
          if (err?.status !== 401 || request.context.get(TOKEN_REFRESH_REQUEST)) {
            return throwError(() => err);
          }

          return this
            .expiredTokenHandler()
            .pipe(catchError(() => next.handle(this.setRequestAuthHeaders(request))))
            .pipe(switchMap(() => next.handle(this.setRequestAuthHeaders(request))))
        })
      );
  }

  private setRequestAuthHeaders(request: HttpRequest<unknown>): HttpRequest<unknown> {
    if (request.context.get(TOKEN_NO_AUTH)) {
      return request;
    }

    const authToken = this.authService.getAuthToken();

    if (!authToken) {
      return request;
    }

    return request.clone({
      headers: request.headers.set('Authorization', `Bearer ${authToken}`),
    });
  }

  private expiredTokenHandler() {
    const refreshToken = this.authService.getRefreshToken();

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
                    filter(st => st === EStatus.PROCESSING),
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
          catchError(() => of(true)),
        );
    }

    this.authService.unauthorize();

    if (typeof window === 'undefined') {
      this.router.navigateByUrl('/');
    } else {
      window.location.reload();
    }

    return of(false);
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
