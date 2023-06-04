import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { EStatus } from 'src/app/constants/status';

import { AuthApiService } from '../../auth-api/services/auth-api.service';

import { IRegistrationRequestPayload } from 'src/app/types/api/auth-api.interface';
import { IApiGenericResponse } from 'src/app/types/api/common.interface';

@Injectable()
export class RegistrationDataService {
  private registrationStatusSbj$: BehaviorSubject<EStatus> = new BehaviorSubject(EStatus.INIT as EStatus);

  private registrationErrorSbj$: BehaviorSubject<any | null> = new BehaviorSubject(null);

  public registrationStatus$: Observable<EStatus> = this.registrationStatusSbj$.asObservable();

  public registrationError$: Observable<any | null> = this.registrationErrorSbj$.asObservable();

  constructor(private authApiService: AuthApiService) { }

  public registration(payload: IRegistrationRequestPayload): Observable<IApiGenericResponse> {
    this.registrationStatusSbj$.next(EStatus.PROCESSING);
    this.registrationErrorSbj$.next(null);

    return this
      .authApiService
      .registration(payload)
      .pipe(
        tap(
          {
            next: (res) => {
              this.registrationStatusSbj$.next(EStatus.SUCCESS);
              this.registrationErrorSbj$.next(null);
            },
            error: (error: any) => {
              this.registrationStatusSbj$.next(EStatus.ERROR);
              this.registrationErrorSbj$.next(error);
            }
          }
        )
      );
  }
}
