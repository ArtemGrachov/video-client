import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';

import { PlaylistsFormDataService } from 'src/app/services/playlists-form-data/playlists-form-data.service';
import { RouteHandlerService } from '../services/route-handler.service';
import { ErrorHandlerService } from 'src/app/modules/main/core/services/error-handler.service';
import { PageLoaderService } from 'src/app/modules/ui/other/page-loader/services/page-loader.service';

const LOADING_TOKEN = 'user-playlists';

export const viewUserPlaylistsResolver: ResolveFn<boolean> = (route, state) => {
  const routeHandlerSerivce: RouteHandlerService = inject(RouteHandlerService);
  const playlistsFormDataService: PlaylistsFormDataService = inject(PlaylistsFormDataService);
  const errorHandlerService = inject(ErrorHandlerService);
  const pageLoaderService = inject(PageLoaderService);

  const userId = route.parent!.parent!.params['id'];

  const formValue = routeHandlerSerivce.routeQueryToFormValue(route.queryParams);
  playlistsFormDataService.fillForm(formValue);

  pageLoaderService.addToken(LOADING_TOKEN);

  return playlistsFormDataService.update({ userIds: [userId] }).pipe(
    map(() => true),
    catchError(error => {
      errorHandlerService.setError(error);
      return of(true);
    }),
    tap({ finalize: () => pageLoaderService.removeToken(LOADING_TOKEN) }),
  );
};
