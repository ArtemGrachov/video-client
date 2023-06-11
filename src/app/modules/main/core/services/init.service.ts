import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';

import { AuthService } from 'src/app/modules/data/auth/services/auth.service';

@Injectable()
export class InitService {
  constructor(private authService: AuthService) {}

  public init() {
    const observables = [];

    if (this.authService.isAuthorized) {
      observables.push(this.authService.getUser('self'));
    }

    return combineLatest(observables);
  }
}
