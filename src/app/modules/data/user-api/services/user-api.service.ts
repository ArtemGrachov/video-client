import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IGetUserResponse } from 'src/app/types/api/users-api.interface';

import { environment } from 'src/environments/environment';

@Injectable()
export class UserApiService {
  constructor(private http: HttpClient) { }

  public getUser(userId: number | 'self'): Observable<IGetUserResponse> {
    return this.http.get<IGetUserResponse>(`${environment.API_URL}/users/${userId}`);
  }
}
