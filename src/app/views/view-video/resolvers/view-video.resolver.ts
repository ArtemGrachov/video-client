import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { combineLatest, map } from 'rxjs';

import { CommentsListDataService } from 'src/app/services/comments-list-data/comments-list-data.service';
import { VideoDataService } from 'src/app/services/video-data/video-data.service';

export const viewVideoResolver: ResolveFn<boolean> = (route, state) => {
  const videoDataService = inject(VideoDataService);
  const commentsListDataService = inject(CommentsListDataService);

  const videoId = route.params['id'];

  return combineLatest([
    videoDataService.getVideo(videoId),
    commentsListDataService.getVideoComments(videoId),
  ]).pipe(map(() => true));
};
