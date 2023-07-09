import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { combineLatest, map } from 'rxjs';

import { RouteHandlerService } from '../services/route-handler.service';
import { VideoListFormService } from 'src/app/services/video-list-form/video-list-form.service';
import { PlaylistDataService } from 'src/app/services/playlist-data/playlist-data.service';

export const viewPlaylistResolver: ResolveFn<boolean> = (route, state) => {
  const routeHandlerSerivce: RouteHandlerService = inject(RouteHandlerService);
  const videoListFormService: VideoListFormService = inject(VideoListFormService);
  const playlistDataService: PlaylistDataService = inject(PlaylistDataService);

  const formValue = routeHandlerSerivce.routeQueryToFormValue(route.queryParams);
  videoListFormService.setValue(formValue)
  const playlistId = +route.paramMap.get('id')!;

  return combineLatest([
    videoListFormService.updatePlaylist(playlistId),
    playlistDataService.getPlaylist(playlistId),
  ])
  .pipe(map(() => true));
};
