import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { catchError, map, of, tap } from 'rxjs';

import { USERS_PER_PAGE } from 'src/app/constants/users';

import { UsersListFormService } from 'src/app/services/users-list-form/users-list-form.service';
import { RouteHandlerService } from '../services/route-handler.service';
import { ErrorHandlerService } from 'src/app/modules/main/core/services/error-handler.service';
import { PageLoaderService } from 'src/app/modules/ui/other/page-loader/services/page-loader.service';

const LOADING_TOKEN = 'user-subscribers';

export const viewUserSubscribersResolver: ResolveFn<boolean> = (route, state) => {
  const routeHandlerSerivce: RouteHandlerService = inject(RouteHandlerService);
  const usersListFormService: UsersListFormService = inject(UsersListFormService);
  const errorHandlerService = inject(ErrorHandlerService);
  const pageLoaderService = inject(PageLoaderService);

  const userId = route.parent!.parent!.params['id'];

  const formValue = routeHandlerSerivce.routeQueryToFormValue(route.queryParams);
  usersListFormService.fillValue(formValue)

  pageLoaderService.addToken(LOADING_TOKEN);

  return usersListFormService.updateSubscribers(userId, { perPage: USERS_PER_PAGE }).pipe(
    map(() => true),
    catchError(error => {
      errorHandlerService.setError(error);
      return of(true);
    }),
    tap({ finalize: () => pageLoaderService.removeToken(LOADING_TOKEN) }),
  );
};
