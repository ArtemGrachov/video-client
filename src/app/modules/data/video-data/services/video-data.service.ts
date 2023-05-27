import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { VideoApiService } from '../../video-api/services/video-api.service';

import { IGetVideoResponse } from 'src/app/types/api/video-api.interface';

@Injectable()
export class VideoDataService {
  private dataSbj$: BehaviorSubject<IGetVideoResponse | null> = new BehaviorSubject(null as IGetVideoResponse | null);

  public data$: Observable<IGetVideoResponse | null> = this.dataSbj$.asObservable();

  constructor(private videoApiService: VideoApiService) { }

  public getVideo(videoId: number): void {
    console.log('videoId', videoId);

    this
      .videoApiService
      .getVideo(videoId)
      .subscribe(res => this.handleData(res))
  }

  private handleData(res: IGetVideoResponse): void {
    this.dataSbj$.next(res);
  }
}
