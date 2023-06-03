import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IGetVideosQuery, IGetVideosResponse } from 'src/app/types/api/video-api.interface';
import { IVideo } from 'src/app/types/models/video.interface';

@Injectable()
export class VideoApiService {
  constructor(private http: HttpClient) { }

  public getVideos(query?: IGetVideosQuery): Observable<IGetVideosResponse> {
    let params = new HttpParams();

    if (query?.page) {
      params = params.set('page', query.page);
    }

    if (query?.search) {
      params = params.set('search', query.search);
    }

    return this.http.get<IGetVideosResponse>('http://localhost:4000/video', { params });
  }

  public getVideo(videoId: number): Observable<IVideo> {
    return this.http.get<IVideo>(`http://localhost:4000/video/${videoId}`);
  }
}