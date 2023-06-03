import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { VideoApiService } from '../../video-api/services/video-api.service';

import { IGetVideoResponse } from 'src/app/types/api/video-api.interface';
import { IVideo } from 'src/app/types/models/video.interface';

@Injectable()
export class VideoDataService {
  private dataSbj$: BehaviorSubject<IGetVideoResponse | null> = new BehaviorSubject(null as IGetVideoResponse | null);

  public data$: Observable<IGetVideoResponse | null> = this.dataSbj$.asObservable();

  constructor(private videoApiService: VideoApiService) { }

  public getVideo(videoId: number): Observable<IVideo> {
    return this
      .videoApiService
      .getVideo(videoId)
      .pipe(tap(res => this.handleData(res)))
  }

  private handleData(res: IGetVideoResponse): void {
    this.dataSbj$.next(res);
  }
}
