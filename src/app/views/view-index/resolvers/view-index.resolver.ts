import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { map } from 'rxjs';

import { RouteHandlerService } from '../services/route-handler.service';
import { VideoListFormService } from 'src/app/modules/data/video-list-form/services/video-list-form.service';

export const viewIndexResolver: ResolveFn<boolean> = (route, state) => {
  const routeHandlerSerivce: RouteHandlerService = inject(RouteHandlerService);
  const videoListFormService: VideoListFormService = inject(VideoListFormService);

  const formValue = routeHandlerSerivce.routeQueryToFormValue(route.queryParams);
  videoListFormService.setValue(formValue)

  return videoListFormService.update().pipe(map(() => true));
};
