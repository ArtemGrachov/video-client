import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  IGetUserResponse,
  IGetUsersQuery,
  IGetUsersResponse,
  IUpdateUserPayload,
  IUpdateUserResponse,
} from 'src/app/types/api/users-api.interface';
import { IApiGenericResponse } from 'src/app/types/api/common.interface';

import { environment } from 'src/environments/environment';

@Injectable()
export class UserApiService {
  constructor(private http: HttpClient) { }

  public getUser(userId: number | 'self'): Observable<IGetUserResponse> {
    return this.http.get<IGetUserResponse>(`${environment.API_URL}/users/${userId}`);
  }

  public updateUser(payload: IUpdateUserPayload): Observable<IUpdateUserResponse> {
    const formData = new FormData();

    if (payload.name) {
      formData.append('name', payload.name);
    }

    if (payload.email) {
      formData.append('description', payload.email);
    }

    if (payload.avatar) {
      formData.append('avatar', payload.avatar);
    }

    return this.http.patch<IUpdateUserResponse>(`${environment.API_URL}/users/self`, formData);
  }

  public subscribeToUser(userId: number): Observable<IApiGenericResponse> {
    return this.http.post<IApiGenericResponse>(`${environment.API_URL}/users/${userId}/subscription`, null);
  }

  public unsubscribeFromUser(userId: number): Observable<IApiGenericResponse> {
    return this.http.delete<IApiGenericResponse>(`${environment.API_URL}/users/${userId}/subscription`);
  }

  public getUsers(query?: IGetUsersQuery): Observable<IGetUsersResponse> {
    let params = new HttpParams();

    if (query?.page) {
      params = params.set('page', query.page);
    }

    if (query?.search) {
      params = params.set('search', query.search);
    }

    if (query?.perPage) {
      params = params.set('perPage', query.perPage.toString());
    }

    return this.http.get<IGetUsersResponse>(`${environment.API_URL}/users/`, { params });
  }

  public getUsersSubscriptions(userId: number, query?: IGetUsersQuery): Observable<IGetUsersResponse> {
    let params = new HttpParams();

    if (query?.page) {
      params = params.set('page', query.page);
    }

    if (query?.search) {
      params = params.set('search', query.search);
    }

    if (query?.perPage) {
      params = params.set('perPage', query.perPage.toString());
    }

    return this.http.get<IGetUsersResponse>(`${environment.API_URL}/users/${userId}/subscriptions`, { params });
  }

  public getUsersSubscribers(userId: number, query?: IGetUsersQuery): Observable<IGetUsersResponse> {
    let params = new HttpParams();

    if (query?.page) {
      params = params.set('page', query.page);
    }

    if (query?.search) {
      params = params.set('search', query.search);
    }

    if (query?.perPage) {
      params = params.set('perPage', query.perPage.toString());
    }

    return this.http.get<IGetUsersResponse>(`${environment.API_URL}/users/${userId}/subscribers`, { params });
  }
}
