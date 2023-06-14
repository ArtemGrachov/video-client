import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { PlaylistApiService } from '../../playlist-api/services/playlist-api.service';

import { IGetPlaylistResponse } from 'src/app/types/api/playlist-api.interface';
import { IPlaylist } from 'src/app/types/models/playlist.interface';

@Injectable()
export class PlaylistDataService {
  private dataSbj$: BehaviorSubject<IGetPlaylistResponse | null> = new BehaviorSubject(null as IGetPlaylistResponse | null);

  public data$: Observable<IGetPlaylistResponse | null> = this.dataSbj$.asObservable();

  constructor(private playlistApiService: PlaylistApiService) { }

  public get dataSnapshot(): IPlaylist | null {
    return this.dataSbj$.value;
  }

  public getPlaylist(playlistId: number): Observable<IPlaylist> {
    return this
      .playlistApiService
      .getPlaylist(playlistId)
      .pipe(tap(res => this.handleData(res)))
  }

  private handleData(res: IGetPlaylistResponse): void {
    this.dataSbj$.next(res);
  }

  public updateData(data: Partial<IPlaylist>): void {
    if (!this.dataSnapshot) {
      return;
    }

    this.dataSbj$.next({
      ...this.dataSnapshot,
      ...data,
    });
  }
}
