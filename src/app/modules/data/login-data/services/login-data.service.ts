import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';

import { EStatus } from 'src/app/constants/status';

import { AuthApiService } from '../../auth-api/services/auth-api.service';

import { IAuthResponse, ILoginRequestPayload } from 'src/app/types/api/auth-api.interface';

@Injectable()
export class LoginDataService {
  private loginStatusSbj$: BehaviorSubject<EStatus> = new BehaviorSubject(EStatus.INIT as EStatus);

  private loginErrorSbj$: BehaviorSubject<any | null> = new BehaviorSubject(null);

  public loginStatus$: Observable<EStatus> = this.loginStatusSbj$.asObservable();

  public loginError$: Observable<any | null> = this.loginErrorSbj$.asObservable();

  constructor(private authApiService: AuthApiService) { }

  public login(payload: ILoginRequestPayload): Observable<IAuthResponse> {
    this.loginStatusSbj$.next(EStatus.PROCESSING);
    this.loginErrorSbj$.next(null);

    return this
      .authApiService
      .login(payload)
      .pipe(
        tap(
          {
            next: () => {
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
