import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { UserApiService } from '../../user-api/services/user-api.service';

import { IGetUserResponse } from 'src/app/types/api/users-api.interface';
import { IUser } from 'src/app/types/models/user.interface';

@Injectable()
export class UserDataService {
  private dataSbj$: BehaviorSubject<IGetUserResponse | null> = new BehaviorSubject(null as IGetUserResponse | null);

  public data$: Observable<IGetUserResponse | null> = this.dataSbj$.asObservable();

  public get dataSnapshot(): IGetUserResponse | null {
    return this.dataSbj$.value;
  }

  constructor(
    private userApiService: UserApiService,
  ) { }

  public updateData(user: IUser): void {
    this.dataSbj$.next(user);
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
}
