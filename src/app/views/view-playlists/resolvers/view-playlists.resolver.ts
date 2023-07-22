import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';

import { RouteHandlerService } from '../services/route-handler.service';
import { PlaylistsFormDataService } from 'src/app/services/playlists-form-data/playlists-form-data.service';
import { ErrorHandlerService } from 'src/app/modules/main/core/services/error-handler.service';

export const viewPlaylistsResolver: ResolveFn<boolean> = (route, state) => {
  const routeHandlerSerivce: RouteHandlerService = inject(RouteHandlerService);
  const playlistsFormDataService: PlaylistsFormDataService = inject(PlaylistsFormDataService);
  const errorHandlerService = inject(ErrorHandlerService);

  const formValue = routeHandlerSerivce.routeQueryToFormValue(route.queryParams);
  playlistsFormDataService.fillForm(formValue)

  return playlistsFormDataService.update().pipe(
    map(() => true),
    catchError(error => {
      errorHandlerService.setError(error);
      return of(true);
    }),
  );
};
