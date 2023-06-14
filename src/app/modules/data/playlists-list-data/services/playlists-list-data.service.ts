import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { PlaylistApiService } from '../../playlist-api/services/playlist-api.service';

import { IGetPlaylistsQuery, IGetPlaylistsResponse } from 'src/app/types/api/playlist-api.interface';
import { IPlaylist } from 'src/app/types/models/playlist.interface';
import { IUser } from 'src/app/types/models/user.interface';
import { IPagination } from 'src/app/types/other/pagination.interface';
import { IDictionary } from 'src/app/types/other/dictionary.interface';

@Injectable()
export class PlaylistsListDataService {
  private dataSbj$: BehaviorSubject<IGetPlaylistsResponse | null> = new BehaviorSubject(null as IGetPlaylistsResponse | null);

  private itemsSbj$: BehaviorSubject<IPlaylist[]> = new BehaviorSubject([] as IPlaylist[]);

  private paginationSbj$: BehaviorSubject<IPagination | null> = new BehaviorSubject(null as IPagination | null);

  public data$: Observable<IGetPlaylistsResponse | null> = this.dataSbj$.asObservable();

  public items$: Observable<IPlaylist[]> = this.itemsSbj$.asObservable();

  public pagination$: Observable<IPagination | null> = this.paginationSbj$.asObservable();

  constructor(private playlistApiService: PlaylistApiService) { }

  public getPlaylists(query?: IGetPlaylistsQuery): Observable<IGetPlaylistsResponse> {
    return this
      .playlistApiService
      .getPlaylists(query)
      .pipe(tap(res => this.handleData(res, query)))
  }

  private handleData(res: IGetPlaylistsResponse, query?: IGetPlaylistsQuery): void {
    const userMap: IDictionary<IUser> = res.users.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {} as IDictionary<IUser>);

    const pagination = this.paginationSbj$.getValue();
    let items = this.itemsSbj$.getValue();

    const newItems = res.data.map(playlist => ({ ...playlist, author: userMap[playlist.authorId] }))

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
