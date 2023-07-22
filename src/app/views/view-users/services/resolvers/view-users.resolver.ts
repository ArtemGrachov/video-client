import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { catchError, map, of } from 'rxjs';

import { USERS_PER_PAGE } from 'src/app/constants/users';

import { UsersListFormService } from 'src/app/services/users-list-form/users-list-form.service';
import { RouteHandlerService } from '../route-handler.service';
import { ErrorHandlerService } from 'src/app/modules/main/core/services/error-handler.service';

export const viewUsersResolver: ResolveFn<boolean> = (route, state) => {
  const routeHandlerSerivce: RouteHandlerService = inject(RouteHandlerService);
  const usersListFormService: UsersListFormService = inject(UsersListFormService);
  const errorHandlerService = inject(ErrorHandlerService);

  const formValue = routeHandlerSerivce.routeQueryToFormValue(route.queryParams);
  usersListFormService.fillValue(formValue)

  return usersListFormService.update({ perPage: USERS_PER_PAGE }).pipe(
    map(() => true),
    catchError(error => {
      errorHandlerService.setError(error);
      return of(true);
    }),
  );
};
