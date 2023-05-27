import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { VideoApiService } from '../../video-api/services/video-api.service';

import { IVideo } from 'src/app/types/models/video.interface';
import { IGetVideosResponse } from 'src/app/types/api/video-api.interface';
import { IDictionary } from 'src/app/types/other/dictionary.interface';
import { IUser } from 'src/app/types/models/user.interface';

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
    const userMap: IDictionary<IUser> = res.users.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {} as IDictionary<IUser>);

    const newItems = [
      ...this.itemsSbj$.getValue(),
      ...res.data.map(video => ({ ...video, author: userMap[video.authorId] }))
    ];

    this.dataSbj$.next(res);
    this.itemsSbj$.next(newItems);
  }
}
