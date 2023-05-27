import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { VideoApiService } from '../../video-api/services/video-api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { IVideo } from 'src/app/types/models/video.interface';
import { IGetVideosResponse } from 'src/app/types/api/video-api.interface';

@Injectable()
export class VideoDataService {
  private dataSbj$: BehaviorSubject<IGetVideosResponse | null> = new BehaviorSubject(null as IGetVideosResponse | null);

  private itemsSbj$: BehaviorSubject<IVideo[]> = new BehaviorSubject([] as IVideo[]);

  public data$: Observable<IGetVideosResponse | null> = this.dataSbj$.asObservable();

  public items$: Observable<IVideo[]> = this.itemsSbj$.asObservable();

  constructor(
    @Inject(PLATFORM_ID) private platofrmId: Object,
    private videoApiService: VideoApiService
  ) { }

  public getVideos(): void {
    this
      .videoApiService
      .getVideos()
      .subscribe(res => this.handleData(res))
  }

  private handleData(res: IGetVideosResponse): void {
    this.dataSbj$.next(res);
    this.itemsSbj$.next([...this.itemsSbj$.getValue(), ...res.data]);
  }
}
