import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  IGetPlaylistResponse,
  IGetPlaylistsQuery,
  IGetPlaylistsResponse,
} from 'src/app/types/api/playlist-api.interface';
import {
  IGetVideosQuery,
  IGetVideosResponse,
} from 'src/app/types/api/video-api.interface';

import { environment } from 'src/environments/environment';

@Injectable()
export class PlaylistApiService {
  constructor(private http: HttpClient) { }

  public getPlaylists(query?: IGetPlaylistsQuery): Observable<IGetPlaylistsResponse> {
    let params = new HttpParams();

    if (query?.page) {
      params = params.set('page', query.page);
    }

    if (query?.search) {
      params = params.set('search', query.search);
    }

    return this.http.get<IGetPlaylistsResponse>(`${environment.API_URL}/playlists`, { params });
  }

  public getPlaylistVideos(playlistId: number, query?: IGetVideosQuery): Observable<IGetVideosResponse> {
    let params = new HttpParams();

    if (query?.page) {
      params = params.set('page', query.page);
    }

    if (query?.search) {
      params = params.set('search', query.search);
    }

    return this.http.get<IGetVideosResponse>(`${environment.API_URL}/playlists/${playlistId}/video`, { params });
  }

  public getPlaylist(playlistId: number): Observable<IGetPlaylistResponse> {
    return this.http.get<IGetPlaylistResponse>(`${environment.API_URL}/playlists/${playlistId}`);
  }
}
