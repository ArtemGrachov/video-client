import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = this.authService.getAuthToken();

    if (!authToken) {
      return next.handle(request);
    }

    const authReq = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${authToken}`),
    });

    return next.handle(authReq);
  }
}
