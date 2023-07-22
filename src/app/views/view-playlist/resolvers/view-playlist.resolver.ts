import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { catchError, combineLatest, map, of } from 'rxjs';

import { RouteHandlerService } from '../services/route-handler.service';
import { VideoListFormService } from 'src/app/services/video-list-form/video-list-form.service';
import { PlaylistDataService } from 'src/app/services/playlist-data/playlist-data.service';
import { ErrorHandlerService } from 'src/app/modules/main/core/services/error-handler.service';

export const viewPlaylistResolver: ResolveFn<boolean> = (route, state) => {
  const routeHandlerSerivce: RouteHandlerService = inject(RouteHandlerService);
  const videoListFormService: VideoListFormService = inject(VideoListFormService);
  const playlistDataService: PlaylistDataService = inject(PlaylistDataService);
  const errorHandlerService = inject(ErrorHandlerService);

  const formValue = routeHandlerSerivce.routeQueryToFormValue(route.queryParams);
  videoListFormService.fillForm(formValue)
  const playlistId = +route.paramMap.get('id')!;

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
  );
};
