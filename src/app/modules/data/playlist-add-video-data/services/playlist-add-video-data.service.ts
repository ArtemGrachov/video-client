import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { EStatus } from 'src/app/constants/status';

import { IPlaylistAddVideoPayload } from 'src/app/types/api/playlist-api.interface';
import { IApiGenericResponse } from 'src/app/types/api/common.interface';
import { PlaylistApiService } from '../../playlist-api/services/playlist-api.service';

@Injectable()
export class PlaylistAddVideoDataService {
  private submitStatusSbj$: BehaviorSubject<EStatus> = new BehaviorSubject(EStatus.INIT as EStatus);

  private submitErrorSbj$: BehaviorSubject<any | null> = new BehaviorSubject(null);

  public submitStatus$: Observable<EStatus> = this.submitStatusSbj$.asObservable();

  public submitError$: Observable<any | null> = this.submitErrorSbj$.asObservable();

  constructor(private playlistApiService: PlaylistApiService) { }

  public submit(playlistId: number, payload: IPlaylistAddVideoPayload): Observable<IApiGenericResponse> {
    this.submitStatusSbj$.next(EStatus.PROCESSING);
    this.submitErrorSbj$.next(null);

    return this
      .playlistApiService
      .addVideoToPlaylist(playlistId, payload)
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
