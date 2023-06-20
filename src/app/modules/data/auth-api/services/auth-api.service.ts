import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  IAuthResponse,
  IChangePasswordPayload,
  ILoginRequestPayload,
  IRegistrationRequestPayload,
  IResetPasswordPayload,
  IResetPasswordRequestPayload,
} from 'src/app/types/api/auth-api.interface';
import { IApiGenericResponse } from 'src/app/types/api/common.interface';

import { environment } from 'src/environments/environment';

@Injectable()
export class AuthApiService {
  constructor(private http: HttpClient) { }

  public login(payload: ILoginRequestPayload): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>(`${environment.API_URL}/auth/log-in`, payload);
  }

  public registration(payload: IRegistrationRequestPayload): Observable<IApiGenericResponse> {
    return this.http.post<IApiGenericResponse>(`${environment.API_URL}/auth/registration`, payload);
  }

  public resetPasswordRequest(payload: IResetPasswordRequestPayload): Observable<IApiGenericResponse> {
    return this.http.post<IApiGenericResponse>(`${environment.API_URL}/auth/reset-password-request`, payload);
  }

  public resetPassword(payload: IResetPasswordPayload): Observable<IApiGenericResponse> {
    return this.http.post<IApiGenericResponse>(`${environment.API_URL}/auth/reset-password`, payload);
  }

  public changePassword(payload: IChangePasswordPayload): Observable<IApiGenericResponse> {
    return this.http.post<IApiGenericResponse>(`${environment.API_URL}/auth/change-password`, payload);
  }
}
