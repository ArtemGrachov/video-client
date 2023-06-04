import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { EStatus } from 'src/app/constants/status';

import { AuthApiService } from '../../auth-api/services/auth-api.service';

import { IResetPasswordPayload } from 'src/app/types/api/auth-api.interface';
import { IApiGenericResponse } from 'src/app/types/api/common.interface';

@Injectable()
export class ResetPasswordDataService {
  private resetPasswordStatusSbj$: BehaviorSubject<EStatus> = new BehaviorSubject(EStatus.INIT as EStatus);

  private resetPasswordErrorSbj$: BehaviorSubject<any | null> = new BehaviorSubject(null);

  public resetPasswordStatus$: Observable<EStatus> = this.resetPasswordStatusSbj$.asObservable();

  public resetPasswordError$: Observable<any | null> = this.resetPasswordErrorSbj$.asObservable();

  constructor(private authApiService: AuthApiService) { }

  public resetPassword(payload: IResetPasswordPayload): Observable<IApiGenericResponse> {
    this.resetPasswordStatusSbj$.next(EStatus.PROCESSING);
    this.resetPasswordErrorSbj$.next(null);

    return this
      .authApiService
      .resetPassword(payload)
      .pipe(
        tap(
          {
            next: (res) => {
              this.resetPasswordStatusSbj$.next(EStatus.SUCCESS);
              this.resetPasswordErrorSbj$.next(null);
            },
            error: (error: any) => {
              this.resetPasswordStatusSbj$.next(EStatus.ERROR);
              this.resetPasswordErrorSbj$.next(error);
            }
          }
        )
      );
  }
}
