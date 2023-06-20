import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IGetUserResponse, IUpdateUserPayload, IUpdateUserResponse } from 'src/app/types/api/users-api.interface';

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
}
