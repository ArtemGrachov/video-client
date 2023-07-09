import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { map } from 'rxjs';

import { UsersListFormService } from 'src/app/services/users-list-form/users-list-form.service';
import { RouteHandlerService } from '../services/route-handler.service';

export const viewUsersResolver: ResolveFn<boolean> = (route, state) => {
  const routeHandlerSerivce: RouteHandlerService = inject(RouteHandlerService);
  const usersListFormService: UsersListFormService = inject(UsersListFormService);

  const formValue = routeHandlerSerivce.routeQueryToFormValue(route.queryParams);
  usersListFormService.setValue(formValue)

  return usersListFormService.update().pipe(map(() => true));
};
