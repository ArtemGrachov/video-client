import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';

import { RouteHandlerService } from '../services/route-handler.service';
import { VideoListFormService } from 'src/app/services/video-list-form/video-list-form.service';
import { ErrorHandlerService } from 'src/app/modules/main/core/services/error-handler.service';
import { PageLoaderService } from 'src/app/modules/ui/other/page-loader/services/page-loader.service';

const LOADING_TOKEN = 'user-videos';

export const viewUserVideosResolver: ResolveFn<boolean> = (route, state) => {
  const routeHandlerSerivce: RouteHandlerService = inject(RouteHandlerService);
  const videoListFormService: VideoListFormService = inject(VideoListFormService);
  const errorHandlerService = inject(ErrorHandlerService);
  const pageLoaderService = inject(PageLoaderService);

  const userId = route.parent!.parent!.params['id'];

  const formValue = routeHandlerSerivce.routeQueryToFormValue(route.queryParams);
  videoListFormService.fillForm(formValue);

  pageLoaderService.addToken(LOADING_TOKEN);

  return videoListFormService.update({ userIds: [userId] }).pipe(
    map(() => true),
    catchError(error => {
      errorHandlerService.setError(error);
      return of(true);
    }),
    tap({ finalize: () => pageLoaderService.removeToken(LOADING_TOKEN) }),
  );
};
