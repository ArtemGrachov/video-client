import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { catchError, map, of } from 'rxjs';

import { ErrorHandlerService } from 'src/app/modules/main/core/services/error-handler.service';
import { PlaylistDataService } from 'src/app/services/playlist-data/playlist-data.service';

export const viewPlaylistEditResolver: ResolveFn<boolean> = (route, state) => {
  const playlistDataService: PlaylistDataService = inject(PlaylistDataService);
  const errorHandlerService = inject(ErrorHandlerService);

  const playlistId = +route.paramMap.get('id')!;

  return playlistDataService.getPlaylist(playlistId).pipe(
    map(() => true),
    catchError(error => {
      errorHandlerService.setError(error);
      return of(true);
    }),
  );
};
