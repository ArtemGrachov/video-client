import { Injectable } from '@angular/core';
import { AuthApiService } from '../../auth-api/services/auth-api.service';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { EStatus } from 'src/app/constants/status';

import { IChangePasswordPayload } from 'src/app/types/api/auth-api.interface';
import { IApiGenericResponse } from 'src/app/types/api/common.interface';

@Injectable()
export class ChangePasswordDataService {
  private submitStatusSbj$: BehaviorSubject<EStatus> = new BehaviorSubject(EStatus.INIT as EStatus);

  private submitErrorSbj$: BehaviorSubject<any | null> = new BehaviorSubject(null);

  public submitStatus$: Observable<EStatus> = this.submitStatusSbj$.asObservable();

  public submitError$: Observable<any | null> = this.submitErrorSbj$.asObservable();

  constructor(
    private authApiService: AuthApiService,
  ) { }

  public changePassword(payload: IChangePasswordPayload): Observable<IApiGenericResponse> {
    this.submitStatusSbj$.next(EStatus.PROCESSING);
    this.submitErrorSbj$.next(null);

    return this
      .authApiService
      .changePassword(payload)
      .pipe(
        tap(
          {
            next: (res) => {
              this.submitStatusSbj$.next(EStatus.SUCCESS);
              this.submitErrorSbj$.next(null);
            },
            error: (error: any) => {
              this.submitStatusSbj$.next(EStatus.ERROR);
              this.submitErrorSbj$.next(error);
            }
          }
        )
      );
  }
}
