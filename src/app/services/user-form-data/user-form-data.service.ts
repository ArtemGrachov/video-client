import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { EStatus } from 'src/app/constants/status';

import { UserApiService } from '../user-api/user-api.service';
import { UserDataService } from '../user-data/user-data.service';

import { IUpdateUserPayload, IUpdateUserResponse } from 'src/app/types/api/users-api.interface';

@Injectable()
export class UserFormDataService {
  private submitStatusSbj$: BehaviorSubject<EStatus> = new BehaviorSubject(EStatus.INIT as EStatus);

  private submitErrorSbj$: BehaviorSubject<any | null> = new BehaviorSubject(null);

  public submitStatus$: Observable<EStatus> = this.submitStatusSbj$.asObservable();

  public submitError$: Observable<any | null> = this.submitErrorSbj$.asObservable();

  constructor(
    private userApiService: UserApiService,
    private userDataService: UserDataService,
  ) { }

  public updateProfile(payload: IUpdateUserPayload): Observable<IUpdateUserResponse> {
    this.submitStatusSbj$.next(EStatus.PROCESSING);
    this.submitErrorSbj$.next(null);

    return this
      .userApiService
      .updateUser(payload)
      .pipe(
        tap(
          {
            next: (res) => {
              this.submitStatusSbj$.next(EStatus.SUCCESS);
              this.submitErrorSbj$.next(null);
              this.userDataService.updateData(res);
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
