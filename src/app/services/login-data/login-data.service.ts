import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap, tap } from 'rxjs';

import { EStatus } from 'src/app/constants/status';

import { AuthService } from '../auth/auth.service';
import { AuthApiService } from '../auth-api/auth-api.service';

import { IAuthResponse, ILoginRequestPayload } from 'src/app/types/api/auth-api.interface';
import { AUTH_USER_SERVICE } from 'src/app/tokens/auth';
import { UserDataService } from '../user-data/user-data.service';

@Injectable()
export class LoginDataService {
  private loginStatusSbj$: BehaviorSubject<EStatus> = new BehaviorSubject(EStatus.INIT as EStatus);

  private loginErrorSbj$: BehaviorSubject<any | null> = new BehaviorSubject(null);

  public loginStatus$: Observable<EStatus> = this.loginStatusSbj$.asObservable();

  public loginError$: Observable<any | null> = this.loginErrorSbj$.asObservable();

  constructor(
    private authService: AuthService,
    private authApiService: AuthApiService,
    @Inject(AUTH_USER_SERVICE) private authUserService: UserDataService,
  ) { }

  public login(payload: ILoginRequestPayload): Observable<IAuthResponse> {
    this.loginStatusSbj$.next(EStatus.PROCESSING);
    this.loginErrorSbj$.next(null);

    return this
      .authApiService
      .login(payload)
      .pipe(
        tap(res => this.authService.authorize(res)),
        switchMap((res) => this.authUserService.getUser('self').pipe(map(() => res))),
        tap(
          {
            next: (res) => {
              this.loginStatusSbj$.next(EStatus.SUCCESS);
              this.loginErrorSbj$.next(null);
            },
            error: (error: any) => {
              this.loginStatusSbj$.next(EStatus.ERROR);
              this.loginErrorSbj$.next(error);
            }
          }
        )
      );
  }
}
