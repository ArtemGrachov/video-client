import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { catchError, map, of, tap } from 'rxjs';

import { ErrorHandlerService } from 'src/app/modules/main/core/services/error-handler.service';
import { PageLoaderService } from 'src/app/modules/ui/other/page-loader/services/page-loader.service';
import { PlaylistDataService } from 'src/app/services/playlist-data/playlist-data.service';

const LOADING_TOKEN = 'playlist-edit';

export const viewPlaylistEditResolver: ResolveFn<boolean> = (route, state) => {
  const playlistDataService: PlaylistDataService = inject(PlaylistDataService);
  const errorHandlerService = inject(ErrorHandlerService);
  const pageLoaderService = inject(PageLoaderService);

  const playlistId = +route.paramMap.get('id')!;

  pageLoaderService.addToken(LOADING_TOKEN);

  return playlistDataService.getPlaylist(playlistId).pipe(
    map(() => true),
    catchError(error => {
      errorHandlerService.setError(error);
      return of(true);
    }),
    tap({ finalize: () => pageLoaderService.removeToken(LOADING_TOKEN) }),
  );
};
