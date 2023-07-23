import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { catchError, map, of, tap } from 'rxjs';

import { ErrorHandlerService } from 'src/app/modules/main/core/services/error-handler.service';
import { VideoDataService } from 'src/app/services/video-data/video-data.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PageLoaderService } from 'src/app/modules/ui/other/page-loader/services/page-loader.service';

const LOADING_TOKEN = 'video';

export const videoResolver: ResolveFn<boolean> = (route, state) => {
  const videoDataService = inject(VideoDataService);
  const authService = inject(AuthService);
  const router = inject(Router);
  const errorHandlerService = inject(ErrorHandlerService);
  const pageLoaderService = inject(PageLoaderService);

  const videoId = route.params['id'];

  pageLoaderService.addToken(LOADING_TOKEN);

  return videoDataService
    .getVideo(videoId)
    .pipe(
      map(video => {
        if (video.authorId !== authService.userDataSnapshot?.id) {
          router.navigate(['/', 'video', videoId]);
          return false;
        }

        return true;
      }),
      catchError(error => {
        errorHandlerService.setError(error);
        return of(true);
      }),
      tap({ finalize: () => pageLoaderService.removeToken(LOADING_TOKEN) }),
    );
};
