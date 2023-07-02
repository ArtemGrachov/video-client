import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from 'src/app/modules/data/auth/services/auth.service';
import { ViewLoginModalService } from 'src/app/views/view-login/services/view-login-modal.service';

export const authOnlyGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const viewLoginModalService = inject(ViewLoginModalService);
  const platformId = inject(PLATFORM_ID);

  if (authService.isAuthorized) {
    return true;
  }

  if (isPlatformBrowser(platformId)) {
    viewLoginModalService.showModal(state.url);

    if (router.getCurrentNavigation()?.previousNavigation) {
      return false;
    }
  }

  return router.parseUrl('/');
};
