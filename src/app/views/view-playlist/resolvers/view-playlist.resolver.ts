import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { map } from 'rxjs';

import { VideoListFormService } from 'src/app/modules/data/video-list-form/services/video-list-form.service';
import { RouteHandlerService } from '../services/route-handler.service';

export const viewPlaylistResolver: ResolveFn<boolean> = (route, state) => {
  const routeHandlerSerivce: RouteHandlerService = inject(RouteHandlerService);
  const videoListFormService: VideoListFormService = inject(VideoListFormService);

  const formValue = routeHandlerSerivce.routeQueryToFormValue(route.queryParams);
  videoListFormService.setValue(formValue)

  return videoListFormService.updatePlaylist(+route.paramMap.get('id')!).pipe(map(() => true));
};
