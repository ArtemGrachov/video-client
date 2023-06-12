import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';

import { AuthService } from 'src/app/modules/data/auth/services/auth.service';
import { ViewLoginModalService } from 'src/app/views/view-login/services/view-login-modal.service';

export const authOnlyGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const viewLoginModalService = inject(ViewLoginModalService);

  if (authService.isAuthorized) {
    return authService.isAuthorized;
  }

  viewLoginModalService.showModal();

  return router.parseUrl('/');
};
