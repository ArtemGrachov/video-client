import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { VideoApiService } from '../../video-api/services/video-api.service';

import { IVideo } from 'src/app/types/models/video.interface';
import { IGetVideosQuery, IGetVideosResponse } from 'src/app/types/api/video-api.interface';
import { IDictionary } from 'src/app/types/other/dictionary.interface';
import { IUser } from 'src/app/types/models/user.interface';
import { IPagination } from 'src/app/types/other/pagination.interface';

@Injectable()
export class VideoListDataService {
  private dataSbj$: BehaviorSubject<IGetVideosResponse | null> = new BehaviorSubject(null as IGetVideosResponse | null);

  private itemsSbj$: BehaviorSubject<IVideo[]> = new BehaviorSubject([] as IVideo[]);

  private paginationSbj$: BehaviorSubject<IPagination | null> = new BehaviorSubject(null as IPagination | null);

  public data$: Observable<IGetVideosResponse | null> = this.dataSbj$.asObservable();

  public items$: Observable<IVideo[]> = this.itemsSbj$.asObservable();

  public pagination$: Observable<IPagination | null> = this.paginationSbj$.asObservable();

  constructor(private videoApiService: VideoApiService) { }

  public getVideos(query?: IGetVideosQuery): Observable<IGetVideosResponse> {
    return this
      .videoApiService
      .getVideos(query)
      .pipe(tap(res => this.handleData(res, query)))
  }

  private handleData(res: IGetVideosResponse, query?: IGetVideosQuery): void {
    const userMap: IDictionary<IUser> = res.users.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {} as IDictionary<IUser>);

    const pagination = this.paginationSbj$.getValue();
    let items = this.itemsSbj$.getValue();

    const newItems = res.data.map(video => ({ ...video, author: userMap[video.authorId] }))

    const page = query?.page ?? 1;
    let lowerPage = pagination?.lowerPage ?? page;
    let upperPage = pagination?.upperPage ?? page;

    if (page < lowerPage) {
      items.unshift(...newItems);
      lowerPage = page;
    } else if (page > upperPage) {
      items.push(...newItems);
      upperPage = page;
    } else {
      items = newItems;
      lowerPage = upperPage = page;
    }

    this.dataSbj$.next(res);
    this.itemsSbj$.next(items);
    this.paginationSbj$.next({
      ...res.pagination,
      lowerPage,
      upperPage
    });
  }
}
