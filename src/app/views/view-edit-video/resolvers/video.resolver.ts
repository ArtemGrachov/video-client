import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { map } from 'rxjs';

import { AuthService } from 'src/app/modules/data/auth/services/auth.service';
import { VideoDataService } from 'src/app/modules/data/video-data/services/video-data.service';

export const videoResolver: ResolveFn<boolean> = (route, state) => {
  const videoDataService = inject(VideoDataService);
  const authService = inject(AuthService);
  const router = inject(Router);

  const videoId = route.params['id'];

  return videoDataService
    .getVideo(videoId)
    .pipe(map(video => {
      if (video.authorId !== authService.userDataSnapshot?.id) {
        router.navigate(['/', 'video', videoId]);
        return false;
      }

      return true;
    }));
};