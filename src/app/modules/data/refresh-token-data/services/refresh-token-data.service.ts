import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { EStatus } from 'src/app/constants/status';

import { AuthApiService } from '../../auth-api/services/auth-api.service';

import { IAuthResponse, IRefreshTokenPayload } from 'src/app/types/api/auth-api.interface';

@Injectable()
export class RefreshTokenDataService {
  private refreshStatusSbj$: BehaviorSubject<EStatus> = new BehaviorSubject(EStatus.INIT as EStatus);

  private refreshErrorSbj$: BehaviorSubject<any | null> = new BehaviorSubject(null);

  public refreshStatus$: Observable<EStatus> = this.refreshStatusSbj$.asObservable();

  public refreshError$: Observable<any | null> = this.refreshErrorSbj$.asObservable();

  constructor(private authApiService: AuthApiService) { }

  public refreshToken(payload: IRefreshTokenPayload): Observable<IAuthResponse> {
    this.refreshStatusSbj$.next(EStatus.PROCESSING);
    this.refreshErrorSbj$.next(null);

    return this
      .authApiService
      .refreshToken(payload)
      .pipe(
        tap(
          {
            next: (res) => {
              this.refreshStatusSbj$.next(EStatus.SUCCESS);
              this.refreshErrorSbj$.next(null);
            },
            error: (error: any) => {
              this.refreshStatusSbj$.next(EStatus.ERROR);
              this.refreshErrorSbj$.next(error);
            }
          }
        )
      );
  }
}
