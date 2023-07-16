import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { UsersListDataService } from '../users-list-data/users-list-data.service';

import { IGetUsersQuery, IGetUsersResponse } from 'src/app/types/api/users-api.interface';

const DEFAULT_VALUE = {
  page: 1,
  search: '',
};

@Injectable()
export class UsersListFormService {
  public readonly form = new FormGroup({
    page: new FormControl(1),
    search: new FormControl(''),
  });

  constructor(private usersListDataService: UsersListDataService) { }

  public fillValue(value: IGetUsersQuery): void {
    this.form.patchValue(Object.assign({}, DEFAULT_VALUE, value));
  }

  public update(query?: IGetUsersQuery): Observable<IGetUsersResponse> {
    const payload = { ...this.form.getRawValue() };

    if (query) {
      Object.assign(payload, query);
    }

    return this.usersListDataService.getUsers(payload);
  }

  public updateSubscriptions(userId: number, query?: IGetUsersQuery): Observable<IGetUsersResponse> {
    const payload = { ...this.form.getRawValue() };

    if (query) {
      Object.assign(payload, query);
    }

    return this.usersListDataService.getUserSubscriptions(userId, payload);
  }

  public updateSubscribers(userId: number, query?: IGetUsersQuery): Observable<IGetUsersResponse> {
    const payload = { ...this.form.getRawValue() };

    if (query) {
      Object.assign(payload, query);
    }

    return this.usersListDataService.getUserSubscribers(userId, payload);
  }
}
