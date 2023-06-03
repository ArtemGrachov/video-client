import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { map } from 'rxjs';

import { VideoDataService } from 'src/app/modules/data/video-data/services/video-data.service';

export const viewVideoResolver: ResolveFn<boolean> = (route, state) => {
  const videoDataService = inject(VideoDataService);

  return videoDataService.getVideo(route.params['id']).pipe(map(() => true));
};
