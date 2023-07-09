import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { combineLatest, map, tap } from 'rxjs';

import { CommentsListDataService } from 'src/app/services/comments-list-data/comments-list-data.service';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { VideoDataService } from 'src/app/services/video-data/video-data.service';

export const viewVideoResolver: ResolveFn<boolean> = (route, state) => {
  const videoDataService = inject(VideoDataService);
  const userDataService: UserDataService = inject(UserDataService);
  const commentsListDataService = inject(CommentsListDataService);

  const videoId = route.params['id'];

  return combineLatest([
    videoDataService.getVideo(videoId).pipe(tap(video => userDataService.setData(video.author!))),
    commentsListDataService.getVideoComments(videoId),
  ]).pipe(map(() => true));
};
