import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { EStatus } from 'src/app/constants/status';

import { UserApiService } from '../user-api/user-api.service';

import { IGetUserResponse } from 'src/app/types/api/users-api.interface';
import { IUser } from 'src/app/types/models/user.interface';
import { IApiGenericResponse } from 'src/app/types/api/common.interface';

@Injectable()
export class UserDataService {
  private dataSbj$: BehaviorSubject<IGetUserResponse | null> = new BehaviorSubject(null as IGetUserResponse | null);

  public data$: Observable<IGetUserResponse | null> = this.dataSbj$.asObservable();

  public get dataSnapshot(): IGetUserResponse | null {
    return this.dataSbj$.value;
  }

  constructor(
    private userApiService: UserApiService,
  ) {}

  public setData(user: IUser): void {
    this.dataSbj$.next(user);
  }

  public updateData(user: Partial<IUser>): void {
    if (!this.dataSnapshot) {
      return;
    }

    this.dataSbj$.next({
      ...this.dataSnapshot,
      ...user,
    });
  }

  public getUser(userId: number | 'self'): Observable<IGetUserResponse> {
    return this
      .userApiService
      .getUser(userId)
      .pipe(tap(res => this.handleData(res)))
  }

  private handleData(res: IGetUserResponse): void {
    this.dataSbj$.next(res);
  }

  public updateSubscription(subscribe: boolean = true): Observable<IApiGenericResponse> {
    if (!this.dataSnapshot) {
      throw new Error('No user to subscribe');
    }

    this.updateData({
      subscribeStatus: EStatus.PROCESSING,
      subscribeError: null,
    });

    const action = subscribe
      ? this.userApiService.subscribeToUser(this.dataSnapshot.id)
      : this.userApiService.unsubscribeFromUser(this.dataSnapshot.id);

    return action.pipe(
        tap({
          next: () => {
            this.updateData({
              subscribeStatus: EStatus.SUCCESS,
              subscribeError: null,
              isSubscription: subscribe,
            });
          },
          error: (err: any) => {
            this.updateData({
              subscribeStatus: EStatus.ERROR,
              subscribeError: err,
            });
          }
        }
      ));
  }
}
