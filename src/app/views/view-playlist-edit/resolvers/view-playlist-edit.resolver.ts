import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { map } from 'rxjs';

import { PlaylistDataService } from 'src/app/services/playlist-data/playlist-data.service';

export const viewPlaylistEditResolver: ResolveFn<boolean> = (route, state) => {
  const playlistDataService: PlaylistDataService = inject(PlaylistDataService);

  const playlistId = +route.paramMap.get('id')!;

  return playlistDataService.getPlaylist(playlistId).pipe(map(() => true));
};
