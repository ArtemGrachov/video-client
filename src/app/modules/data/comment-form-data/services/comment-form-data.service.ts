import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { EStatus } from 'src/app/constants/status';

import { VideoApiService } from '../../video-api/services/video-api.service';
import { CommentsListDataService } from '../../comments-list-data/services/comments-list-data.service';

import { ICreateCommentPayload, ICreateCommentResponse } from 'src/app/types/api/comments-api.interface';

@Injectable()
export class CommentFormDataService {
  private submitStatusSbj$: BehaviorSubject<EStatus> = new BehaviorSubject(EStatus.INIT as EStatus);

  private submitErrorSbj$: BehaviorSubject<any | null> = new BehaviorSubject(null);

  public submitStatus$: Observable<EStatus> = this.submitStatusSbj$.asObservable();

  public submitError$: Observable<any | null> = this.submitErrorSbj$.asObservable();

  constructor(
    private videoApiService: VideoApiService,
    private commentListDataService: CommentsListDataService,
  ) { }

  public createComment(videoId: number, payload: ICreateCommentPayload): Observable<ICreateCommentResponse> {
    this.submitStatusSbj$.next(EStatus.PROCESSING);
    this.submitErrorSbj$.next(null);

    return this
      .videoApiService
      .createVideoComment(videoId, payload)
      .pipe(
        tap(
          {
            next: (res) => {
              this.commentListDataService.unshiftItem(res);
              this.submitStatusSbj$.next(EStatus.SUCCESS);
              this.submitErrorSbj$.next(null);
            },
            error: (error: any) => {
              this.submitStatusSbj$.next(EStatus.ERROR);
              this.submitErrorSbj$.next(error);
            }
          }
        )
      );
  }
}
