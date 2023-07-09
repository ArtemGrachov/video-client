import { Injectable, Optional } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { EStatus } from 'src/app/constants/status';

import { VideoApiService } from '../video-api/video-api.service';
import { PlaylistApiService } from '../playlist-api/playlist-api.service';

import { IVideo } from 'src/app/types/models/video.interface';
import { IGetVideosQuery, IGetVideosResponse } from 'src/app/types/api/video-api.interface';
import { IDictionary } from 'src/app/types/other/dictionary.interface';
import { IUser } from 'src/app/types/models/user.interface';
import { IPagination } from 'src/app/types/other/pagination.interface';
import { IApiGenericResponse } from 'src/app/types/api/common.interface';

@Injectable()
export class VideoListDataService {
  private dataSbj$: BehaviorSubject<IGetVideosResponse | null> = new BehaviorSubject(null as IGetVideosResponse | null);

  private itemsSbj$: BehaviorSubject<IVideo[]> = new BehaviorSubject([] as IVideo[]);

  private paginationSbj$: BehaviorSubject<IPagination | null> = new BehaviorSubject(null as IPagination | null);

  public data$: Observable<IGetVideosResponse | null> = this.dataSbj$.asObservable();

  public items$: Observable<IVideo[]> = this.itemsSbj$.asObservable();

  public pagination$: Observable<IPagination | null> = this.paginationSbj$.asObservable();

  public get itemsSnapshot(): IVideo[] {
    return this.itemsSbj$.value;
  }

  constructor(
    private videoApiService: VideoApiService,
    @Optional() private playlistApiService?: PlaylistApiService,
  ) { }

  public replaceItem(newItem: IVideo): void {
    const newItems = this
      .itemsSnapshot
      .map((item) => {
        if (item.id !== newItem.id) {
          return item;
        }

        return newItem;
      });

    this.itemsSbj$.next(newItems);
  }

  public updateItem(id: number, changes: Partial<IVideo>): void {
    const item = this.itemsSnapshot.find(video => video.id === id);

    if (!item) {
      return;
    }

    this.replaceItem({
      ...item,
      ...changes,
      id,
    });
  }

  public removeItem(id: number): void {
    const newItems = this
      .itemsSnapshot
      .filter(item => item.id !== id);

    this.itemsSbj$.next(newItems);
  }

  public getVideos(query?: IGetVideosQuery): Observable<IGetVideosResponse> {
    return this
      .videoApiService
      .getVideos(query)
      .pipe(tap(res => this.handleData(res, query)));
  }

  public getPlaylistVideos(playlistId: number, query?: IGetVideosQuery): Observable<IGetVideosResponse> {
    if (!this.playlistApiService) {
      throw new Error('No playlistApiService provided');
    }

    return this
      .playlistApiService
      .getPlaylistVideos(playlistId, query)
      .pipe(tap(res => this.handleData(res, query)));
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
      upperPage,
    });
  }

  public deleteVideoFromPlaylist(playlistId: number, videoId: number): Observable<IApiGenericResponse> {
    if (!this.playlistApiService) {
      throw new Error('No playlistApiService provided');
    }

    this.updateItem(
      videoId,
      {
        deleteStatus: EStatus.PROCESSING,
        deleteError: null,
      },
    )

    return this
      .playlistApiService
      .removeVideoFromPlaylist(playlistId, videoId)
      .pipe(
        tap(
          {
            next: (res) => {
              this.removeItem(videoId);
            },
            error: (error: any) => {
              this.updateItem(
                videoId,
                  {
                  deleteStatus: EStatus.ERROR,
                  deleteError: null,
                }
              );
            }
          }
        )
      );
  }
}
