import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { catchError, combineLatest, map, of, tap } from 'rxjs';

import { RouteHandlerService } from '../services/route-handler.service';
import { VideoListFormService } from 'src/app/services/video-list-form/video-list-form.service';
import { PlaylistDataService } from 'src/app/services/playlist-data/playlist-data.service';
import { ErrorHandlerService } from 'src/app/modules/main/core/services/error-handler.service';
import { PageLoaderService } from 'src/app/modules/ui/other/page-loader/services/page-loader.service';

const LOADING_TOKEN = 'playlist';

export const viewPlaylistResolver: ResolveFn<boolean> = (route, state) => {
  const routeHandlerSerivce: RouteHandlerService = inject(RouteHandlerService);
  const videoListFormService: VideoListFormService = inject(VideoListFormService);
  const playlistDataService: PlaylistDataService = inject(PlaylistDataService);
  const errorHandlerService = inject(ErrorHandlerService);
  const pageLoaderService = inject(PageLoaderService);

  const formValue = routeHandlerSerivce.routeQueryToFormValue(route.queryParams);
  videoListFormService.fillForm(formValue)
  const playlistId = +route.paramMap.get('id')!;

  pageLoaderService.addToken(LOADING_TOKEN);

  return combineLatest([
    videoListFormService.updatePlaylist(playlistId),
    playlistDataService.getPlaylist(playlistId),
  ])
  .pipe(
    map(() => true),
    catchError(error => {
      errorHandlerService.setError(error);
      return of(true);
    }),
    tap({ finalize: () => pageLoaderService.removeToken(LOADING_TOKEN) }),
  );
};
