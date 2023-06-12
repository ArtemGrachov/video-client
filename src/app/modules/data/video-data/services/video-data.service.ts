import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';

import { EStatus } from 'src/app/constants/status';

import { VideoApiService } from '../../video-api/services/video-api.service';

import { IApiGenericResponse } from 'src/app/types/api/common.interface';
import { IGetVideoResponse, ILikeVideoResponse } from 'src/app/types/api/video-api.interface';
import { IVideo } from 'src/app/types/models/video.interface';

@Injectable()
export class VideoDataService {
  private dataSbj$: BehaviorSubject<IGetVideoResponse | null> = new BehaviorSubject(null as IGetVideoResponse | null);

  public data$: Observable<IGetVideoResponse | null> = this.dataSbj$.asObservable();

  constructor(private videoApiService: VideoApiService) { }

  public get dataSnapshot(): IVideo | null {
    return this.dataSbj$.value;
  }

  public getVideo(videoId: number): Observable<IVideo> {
    return this
      .videoApiService
      .getVideo(videoId)
      .pipe(tap(res => this.handleData(res)))
  }

  private handleData(res: IGetVideoResponse): void {
    this.dataSbj$.next(res);
  }

  public updateData(data: Partial<IVideo>): void {
    if (!this.dataSnapshot) {
      return;
    }

    this.dataSbj$.next({
      ...this.dataSnapshot,
      ...data,
    });
  }

  public likeVideo(like: boolean = true): Observable<ILikeVideoResponse> {
    if (!this.dataSnapshot) {
      throw new Error('No video to like');
    }

    this.updateData({
      likeStatus: EStatus.PROCESSING,
      likeError: null,
    });

    const action = like
      ? this.videoApiService.likeVideo(this.dataSnapshot.id)
      : this.videoApiService.removeLikeVideo(this.dataSnapshot.id);

    return action
      .pipe(
        tap(
          {
            next: (res) => {
              this.updateData({
                likesCount: res.count,
                isLiked: like,
                likeStatus: EStatus.SUCCESS,
                likeError: null,
              });
            },
            error: (error: any) => {
              this.updateData({
                likeStatus: EStatus.ERROR,
                likeError: error,
              });
            }
          }
        )
      );
  }

  public deleteVideo(): Observable<IApiGenericResponse> {
    if (!this.dataSnapshot) {
      throw new Error('No video to delete');
    }

    this.updateData({
      deleteStatus: EStatus.PROCESSING,
      deleteError: null,
    });

    return this.videoApiService.deleteVideo(this.dataSnapshot.id)
      .pipe(
        tap(
          {
            next: (res) => {
              this.updateData({
                deleteStatus: EStatus.SUCCESS,
                deleteError: null,
              });
            },
            error: (error: any) => {
              this.updateData({
                deleteStatus: EStatus.ERROR,
                deleteError: error,
              });
            }
          }
        )
      );
  }
}
