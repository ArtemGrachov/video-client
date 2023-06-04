import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { EStatus } from 'src/app/constants/status';

import { AuthApiService } from '../../auth-api/services/auth-api.service';

import { IResetPasswordRequestPayload } from 'src/app/types/api/auth-api.interface';
import { IApiGenericResponse } from 'src/app/types/api/common.interface';

@Injectable()
export class ResetPasswordRequestDataService {
  private requestStatusSbj$: BehaviorSubject<EStatus> = new BehaviorSubject(EStatus.INIT as EStatus);

  private requestErrorSbj$: BehaviorSubject<any | null> = new BehaviorSubject(null);

  public requestStatus$: Observable<EStatus> = this.requestStatusSbj$.asObservable();

  public requestError$: Observable<any | null> = this.requestErrorSbj$.asObservable();

  constructor(private authApiService: AuthApiService) { }

  public resetPasswordRequest(payload: IResetPasswordRequestPayload): Observable<IApiGenericResponse> {
    this.requestStatusSbj$.next(EStatus.PROCESSING);
    this.requestErrorSbj$.next(null);

    return this
      .authApiService
      .resetPasswordRequest(payload)
      .pipe(
        tap(
          {
            next: (res) => {
              this.requestStatusSbj$.next(EStatus.SUCCESS);
              this.requestErrorSbj$.next(null);
            },
            error: (error: any) => {
              this.requestStatusSbj$.next(EStatus.ERROR);
              this.requestErrorSbj$.next(error);
            }
          }
        )
      );
  }
}
