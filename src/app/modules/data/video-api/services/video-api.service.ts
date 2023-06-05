import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IGetVideosQuery, IGetVideosResponse, ILikeVideoResponse } from 'src/app/types/api/video-api.interface';
import { IVideo } from 'src/app/types/models/video.interface';

import { environment } from 'src/environments/environment';

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

    return this.http.get<IGetVideosResponse>(`${environment.API_URL}/video`, { params });
  }

  public getVideo(videoId: number): Observable<IVideo> {
    return this.http.get<IVideo>(`${environment.API_URL}/video/${videoId}`);
  }

  public likeVideo(videoId: number): Observable<ILikeVideoResponse> {
    return this.http.post<ILikeVideoResponse>(`${environment.API_URL}/video/${videoId}/like`, null);
  }

  public removeLikeVideo(videoId: number): Observable<ILikeVideoResponse> {
    return this.http.delete<ILikeVideoResponse>(`${environment.API_URL}/video/${videoId}/like`);
  }
}
