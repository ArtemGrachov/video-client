import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { EStatus } from 'src/app/constants/status';

import { VideoApiService } from '../../video-api/services/video-api.service';

import {
  ICreateVideoPayload,
  ICreateVideoResponse,
  IUpdateVideoPayload,
  IUpdateVideoResponse,
} from 'src/app/types/api/video-api.interface';

@Injectable()
export class VideoFormDataService {
  private submitStatusSbj$: BehaviorSubject<EStatus> = new BehaviorSubject(EStatus.INIT as EStatus);

  private submitErrorSbj$: BehaviorSubject<any | null> = new BehaviorSubject(null);

  public submitStatus$: Observable<EStatus> = this.submitStatusSbj$.asObservable();

  public submitError$: Observable<any | null> = this.submitErrorSbj$.asObservable();

  constructor(
    private videoApiService: VideoApiService,
  ) { }

  public createVideo(payload: ICreateVideoPayload): Observable<ICreateVideoResponse> {
    this.submitStatusSbj$.next(EStatus.PROCESSING);
    this.submitErrorSbj$.next(null);

    return this
      .videoApiService
      .createVideo(payload)
      .pipe(
        tap(
          {
            next: (res) => {
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

  public updateVideo(videoId: number, payload: IUpdateVideoPayload): Observable<IUpdateVideoResponse> {
    this.submitStatusSbj$.next(EStatus.PROCESSING);
    this.submitErrorSbj$.next(null);

    return this
      .videoApiService
      .updateVideo(videoId, payload)
      .pipe(
        tap(
          {
            next: (res) => {
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
