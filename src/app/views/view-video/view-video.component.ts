import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, map } from 'rxjs';

import { CommentsListDataService } from 'src/app/modules/data/comments-list-data/services/comments-list-data.service';
import { VideoDataService } from 'src/app/modules/data/video-data/services/video-data.service';

import { IGetCommentsResponse } from 'src/app/types/api/comments-api.interface';
import { IVideo } from 'src/app/types/models/video.interface';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrls: ['./view-video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewVideoComponent {
  constructor(
    private videoDataService: VideoDataService,
    private commentsListDataService: CommentsListDataService,
  ) {}

  public commentsData$ = this.commentsListDataService.data$;

  public comments$ = this.commentsListDataService.items$;

  public commentsPagination$ = this.commentsListDataService.pagination$;

  public video$: Observable<IVideo | null> = this.videoDataService.data$;

  public showVideo$: Observable<boolean> = this.video$.pipe(map(v => Boolean(v)));

  public showComments$: Observable<boolean> = this.commentsData$.pipe(map(v => Boolean(v)));
}
