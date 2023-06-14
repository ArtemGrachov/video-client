import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { map } from 'rxjs';

import { RouteHandlerService } from '../services/route-handler.service';

import { PlaylistsFormDataService } from 'src/app/modules/data/playlists-form-data/services/playlists-form-data.service';

export const viewPlaylistsResolver: ResolveFn<boolean> = (route, state) => {
  const routeHandlerSerivce: RouteHandlerService = inject(RouteHandlerService);
  const playlistsFormDataService: PlaylistsFormDataService = inject(PlaylistsFormDataService);

  const formValue = routeHandlerSerivce.routeQueryToFormValue(route.queryParams);
  playlistsFormDataService.setValue(formValue)

  return playlistsFormDataService.update().pipe(map(() => true));
};
