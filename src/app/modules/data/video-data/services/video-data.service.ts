import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';

import { VideoApiService } from '../../video-api/services/video-api.service';
import { VideoLikeDataService } from './video-like-data.service';

import { IGetVideoResponse, ILikeVideoResponse } from 'src/app/types/api/video-api.interface';
import { IVideo } from 'src/app/types/models/video.interface';

@Injectable()
export class VideoDataService {
  private dataSbj$: BehaviorSubject<IGetVideoResponse | null> = new BehaviorSubject(null as IGetVideoResponse | null);

  public data$: Observable<IGetVideoResponse | null> = this.dataSbj$.asObservable();

  constructor(
    private videoApiService: VideoApiService,
    private videoLikeDataService: VideoLikeDataService,
  ) { }

  public getVideo(videoId: number): Observable<IVideo> {
    return this
      .videoApiService
      .getVideo(videoId)
      .pipe(tap(res => this.handleData(res)))
  }

  private handleData(res: IGetVideoResponse): void {
    this.dataSbj$.next(res);
  }

  public likeVideo(like: boolean = true): Observable<ILikeVideoResponse | null> {
    const video = this.dataSbj$.value;

    if (!video) {
      return of(null);
    }

    return this
      .videoLikeDataService
      .likeVideo(video.id, like)
      .pipe(
        tap(res => {
          const newVideo = {
            ...video,
            likesCount: res.count,
            isLiked: like,
          } as IVideo;

          this.dataSbj$.next(newVideo);
        })
      );
  }
}
