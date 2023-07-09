import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { map } from 'rxjs';

import { UserDataService } from 'src/app/services/user-data/user-data.service';

export const viewUserResolver: ResolveFn<boolean> = (route, state) => {
  const userDataService = inject(UserDataService);

  const userId = route.params['id'];

  return userDataService.getUser(userId).pipe(map(() => true));
};
