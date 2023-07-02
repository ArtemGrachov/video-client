import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TOKEN_NO_AUTH, TOKEN_REFRESH_REQUEST } from 'src/app/constants/http';

import {
  IAuthResponse,
  IChangePasswordPayload,
  ILoginRequestPayload,
  IRefreshTokenPayload,
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
    const context = new HttpContext()
    context.set(TOKEN_NO_AUTH, true);

    return this.http.post<IAuthResponse>(`${environment.API_URL}/auth/log-in`, payload, { context });
  }

  public registration(payload: IRegistrationRequestPayload): Observable<IApiGenericResponse> {
    const context = new HttpContext()
    context.set(TOKEN_NO_AUTH, true);

    return this.http.post<IApiGenericResponse>(`${environment.API_URL}/auth/registration`, payload, { context });
  }

  public resetPasswordRequest(payload: IResetPasswordRequestPayload): Observable<IApiGenericResponse> {
    const context = new HttpContext()
    context.set(TOKEN_NO_AUTH, true);

    return this.http.post<IApiGenericResponse>(`${environment.API_URL}/auth/reset-password-request`, payload, { context });
  }

  public resetPassword(payload: IResetPasswordPayload): Observable<IApiGenericResponse> {
    const context = new HttpContext()
    context.set(TOKEN_NO_AUTH, true);

    return this.http.post<IApiGenericResponse>(`${environment.API_URL}/auth/reset-password`, payload, { context });
  }

  public changePassword(payload: IChangePasswordPayload): Observable<IApiGenericResponse> {
    return this.http.post<IApiGenericResponse>(`${environment.API_URL}/auth/change-password`, payload);
  }

  public refreshToken(payload: IRefreshTokenPayload): Observable<IAuthResponse> {
    const context = new HttpContext()
    context.set(TOKEN_REFRESH_REQUEST, true);
    context.set(TOKEN_NO_AUTH, true);

    return this.http.post<IAuthResponse>(`${environment.API_URL}/auth/refresh-token`, payload, { context });
  }
}
