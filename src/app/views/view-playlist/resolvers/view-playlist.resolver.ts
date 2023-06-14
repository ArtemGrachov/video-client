import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { combineLatest, map } from 'rxjs';

import { VideoListFormService } from 'src/app/modules/data/video-list-form/services/video-list-form.service';
import { PlaylistDataService } from 'src/app/modules/data/playlist-data/services/playlist-data.service';
import { RouteHandlerService } from '../services/route-handler.service';

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
