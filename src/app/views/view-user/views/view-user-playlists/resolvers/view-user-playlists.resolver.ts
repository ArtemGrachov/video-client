import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { map } from 'rxjs';

import { PlaylistsFormDataService } from 'src/app/services/playlists-form-data/playlists-form-data.service';
import { RouteHandlerService } from '../services/route-handler.service';

export const viewUserPlaylistsResolver: ResolveFn<boolean> = (route, state) => {
  const routeHandlerSerivce: RouteHandlerService = inject(RouteHandlerService);
  const playlistsFormDataService: PlaylistsFormDataService = inject(PlaylistsFormDataService);

  const userId = route.parent!.parent!.params['id'];

  const formValue = routeHandlerSerivce.routeQueryToFormValue(route.queryParams);
  playlistsFormDataService.fillForm(formValue);

  return playlistsFormDataService.update({ userIds: [userId] }).pipe(map(() => true));
};
