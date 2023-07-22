import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { catchError, map, of } from 'rxjs';

import { ErrorHandlerService } from 'src/app/modules/main/core/services/error-handler.service';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

export const viewUserResolver: ResolveFn<boolean> = (route, state) => {
  const userDataService = inject(UserDataService);
  const errorHandlerService = inject(ErrorHandlerService);

  const userId = route.params['id'];

  return userDataService.getUser(userId).pipe(
    map(() => true),
    catchError(error => {
      errorHandlerService.setError(error);
      return of(true);
    }),
  );
};
