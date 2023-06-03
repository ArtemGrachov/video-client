import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { AuthApiService } from '../../auth-api/services/auth-api.service';

import { IAuthResponse, ILoginRequestPayload } from 'src/app/types/api/auth-api.interface';

@Injectable()
export class AuthService {
  constructor(private authApiService: AuthApiService) { }

  public login(payload: ILoginRequestPayload): Observable<IAuthResponse> {
    return this
      .authApiService
      .login(payload)
      .pipe(tap((res: IAuthResponse) => {
        console.log('@todo handle auth success', res);
      }));
  }
}
