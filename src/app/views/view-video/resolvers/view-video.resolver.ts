import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { EMPTY, catchError, combineLatest, map, of, tap } from 'rxjs';

import { CommentsListDataService } from 'src/app/services/comments-list-data/comments-list-data.service';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { VideoDataService } from 'src/app/services/video-data/video-data.service';
import { ErrorHandlerService } from 'src/app/modules/main/core/services/error-handler.service';
import { PageLoaderService } from 'src/app/modules/ui/other/page-loader/services/page-loader.service';

const LOADING_TOKEN = 'video';

export const viewVideoResolver: ResolveFn<boolean> = (route, state) => {
  const videoDataService = inject(VideoDataService);
  const userDataService: UserDataService = inject(UserDataService);
  const commentsListDataService = inject(CommentsListDataService);
  const errorHandlerService = inject(ErrorHandlerService);
  const pageLoaderService = inject(PageLoaderService);

  const videoId = route.params['id'];

  pageLoaderService.addToken(LOADING_TOKEN);

  return combineLatest([
    videoDataService.getVideo(videoId).pipe(tap(video => userDataService.setData(video.author!))),
    commentsListDataService.getVideoComments(videoId),
  ]).pipe(
    map(() => true),
    catchError(error => {
      errorHandlerService.setError(error);
      return of(true);
    }),
    tap({ finalize: () => pageLoaderService.removeToken(LOADING_TOKEN) }),
  );
};
