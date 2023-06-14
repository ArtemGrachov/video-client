import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IGetPlaylistsQuery, IGetPlaylistsResponse } from 'src/app/types/api/playlist-api.interface';

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
}
