import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';

import { AuthService } from 'src/app/modules/data/auth/services/auth.service';
import { UserDataService } from 'src/app/modules/data/user-data/services/user-data.service';

@Injectable()
export class InitService {
  constructor(
    private authService: AuthService,
    private userDataService: UserDataService,
  ) {}

  public init() {
    const observables = [];

    if (this.authService.isAuthorized) {
      observables.push(this.userDataService.getUser('self'));
    }

    return combineLatest(observables);
  }
}
