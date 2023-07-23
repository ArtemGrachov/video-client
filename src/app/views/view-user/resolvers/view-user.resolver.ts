import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { catchError, map, of, tap } from 'rxjs';

import { ErrorHandlerService } from 'src/app/modules/main/core/services/error-handler.service';
import { PageLoaderService } from 'src/app/modules/ui/other/page-loader/services/page-loader.service';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

const LOADING_TOKEN = 'user';

export const viewUserResolver: ResolveFn<boolean> = (route, state) => {
  const userDataService = inject(UserDataService);
  const errorHandlerService = inject(ErrorHandlerService);
  const pageLoaderService = inject(PageLoaderService);

  const userId = route.params['id'];

  pageLoaderService.addToken(LOADING_TOKEN);

  return userDataService.getUser(userId).pipe(
    map(() => true),
    catchError(error => {
      errorHandlerService.setError(error);
      return of(true);
    }),
    tap({ finalize: () => pageLoaderService.removeToken(LOADING_TOKEN) }),
  );
};
