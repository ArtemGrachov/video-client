import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { UserApiService } from '../user-api/user-api.service';

import { IGetUsersQuery, IGetUsersResponse } from 'src/app/types/api/users-api.interface';
import { IUser } from 'src/app/types/models/user.interface';
import { IPagination } from 'src/app/types/other/pagination.interface';

@Injectable()
export class UsersListDataService {
  private dataSbj$: BehaviorSubject<IGetUsersResponse | null> = new BehaviorSubject(null as IGetUsersResponse | null);

  private itemsSbj$: BehaviorSubject<IUser[]> = new BehaviorSubject([] as IUser[]);

  private paginationSbj$: BehaviorSubject<IPagination | null> = new BehaviorSubject(null as IPagination | null);

  public data$: Observable<IGetUsersResponse | null> = this.dataSbj$.asObservable();

  public items$: Observable<IUser[]> = this.itemsSbj$.asObservable();

  public pagination$: Observable<IPagination | null> = this.paginationSbj$.asObservable();

  public get itemsSnapshot(): IUser[] {
    return this.itemsSbj$.value;
  }

  constructor(private userApiService: UserApiService) { }

  public getUsers(query?: IGetUsersQuery): Observable<IGetUsersResponse> {
    return this
      .userApiService
      .getUsers(query)
      .pipe(tap(res => this.handleData(res, query)));
  }

  public unshiftItem(item: IUser): void {
    this.itemsSbj$.next([item, ...this.itemsSnapshot]);
  }

  public replaceItem(newItem: IUser): void {
    const newItems = this
      .itemsSnapshot
      .map((item) => {
        if (item.id !== newItem.id) {
          return item;
        }

        return newItem;
      });

    this.itemsSbj$.next(newItems);
  }

  public updateItem(id: number, changes: Partial<IUser>): void {
    const item = this.itemsSnapshot.find(comment => comment.id === id);

    if (!item) {
      return;
    }

    this.replaceItem({
      ...item,
      ...changes,
      id,
    });
  }

  public removeItem(id: number): void {
    const newItems = this
      .itemsSnapshot
      .filter(item => item.id !== id);

    this.itemsSbj$.next(newItems);
  }

  private handleData(res: IGetUsersResponse, query?: IGetUsersQuery): void {
    const pagination = this.paginationSbj$.getValue();
    let items = this.itemsSbj$.getValue();

    const newItems = res.data;

    const page = query?.page ?? 1;
    let lowerPage = pagination?.lowerPage ?? page;
    let upperPage = pagination?.upperPage ?? page;

    if (page < lowerPage) {
      items.unshift(...newItems);
      lowerPage = page;
    } else if (page > upperPage) {
      items.push(...newItems);
      upperPage = page;
    } else {
      items = newItems;
      lowerPage = upperPage = page;
    }

    this.dataSbj$.next(res);
    this.itemsSbj$.next(items);
    this.paginationSbj$.next({
      ...res.pagination,
      lowerPage,
      upperPage
    });
  }
}
