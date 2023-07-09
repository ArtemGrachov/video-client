import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { EStatus } from 'src/app/constants/status';

import { PlaylistApiService } from '../playlist-api/playlist-api.service';
import {
  ICreatePlaylistPayload,
  ICreatePlaylistResponse,
  IUpdatePlaylistPayload,
  IUpdatePlaylistResponse,
} from 'src/app/types/api/playlist-api.interface';

@Injectable()
export class PlaylistFormDataService {
  private submitStatusSbj$: BehaviorSubject<EStatus> = new BehaviorSubject(EStatus.INIT as EStatus);

  private submitErrorSbj$: BehaviorSubject<any | null> = new BehaviorSubject(null);

  public submitStatus$: Observable<EStatus> = this.submitStatusSbj$.asObservable();

  public submitError$: Observable<any | null> = this.submitErrorSbj$.asObservable();

  constructor(
    private playlistApiService: PlaylistApiService,
  ) { }

  public createPlaylist(payload: ICreatePlaylistPayload): Observable<ICreatePlaylistResponse> {
    this.submitStatusSbj$.next(EStatus.PROCESSING);
    this.submitErrorSbj$.next(null);

    return this
      .playlistApiService
      .createPlaylist(payload)
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

  public updatePlaylist(playlistId: number, payload: IUpdatePlaylistPayload): Observable<IUpdatePlaylistResponse> {
    this.submitStatusSbj$.next(EStatus.PROCESSING);
    this.submitErrorSbj$.next(null);

    return this
      .playlistApiService
      .updatePlaylist(playlistId, payload)
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
