import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';

import { ErrorHandlerService } from 'src/app/modules/main/core/services/error-handler.service';
import { VideoDataService } from 'src/app/services/video-data/video-data.service';
import { AuthService } from 'src/app/services/auth/auth.service';

export const videoResolver: ResolveFn<boolean> = (route, state) => {
  const videoDataService = inject(VideoDataService);
  const authService = inject(AuthService);
  const router = inject(Router);
  const errorHandlerService = inject(ErrorHandlerService);

  const videoId = route.params['id'];

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
    );
};
