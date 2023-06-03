import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthResponse, ILoginRequestPayload } from 'src/app/types/api/auth-api.interface';

@Injectable()
export class AuthApiService {
  constructor(private http: HttpClient) { }

  public login(payload: ILoginRequestPayload): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>('http://localhost:4000/auth/log-in', payload);
  }
}
