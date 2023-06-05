import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { EStatus } from 'src/app/constants/status';

import { VideoApiService } from '../../video-api/services/video-api.service';

import { ILikeVideoResponse } from 'src/app/types/api/video-api.interface';

@Injectable()
export class VideoLikeDataService {
  private likeStatusSbj$: BehaviorSubject<EStatus> = new BehaviorSubject(EStatus.INIT as EStatus);

  private likeErrorSbj$: BehaviorSubject<any | null> = new BehaviorSubject(null);

  public likeStatus$: Observable<EStatus> = this.likeStatusSbj$.asObservable();

  public likeError$: Observable<any | null> = this.likeErrorSbj$.asObservable();

  constructor(private videoApiService: VideoApiService) { }

  public likeVideo(videoId: number): Observable<ILikeVideoResponse> {
    this.likeStatusSbj$.next(EStatus.PROCESSING);
    this.likeErrorSbj$.next(null);

    return this
      .videoApiService
      .likeVideo(videoId)
      .pipe(
        tap(
          {
            next: (res) => {
              this.likeStatusSbj$.next(EStatus.SUCCESS);
              this.likeErrorSbj$.next(null);
            },
            error: (error: any) => {
              this.likeStatusSbj$.next(EStatus.ERROR);
              this.likeErrorSbj$.next(error);
            }
          }
        )
      );
  }
}
