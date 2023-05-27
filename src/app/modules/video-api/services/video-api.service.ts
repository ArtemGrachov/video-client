import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGetVideosResponse } from 'src/app/types/api/video-api.interface';

@Injectable()
export class VideoApiService {
  constructor(private http: HttpClient) { }

  public getVideos(): Observable<IGetVideosResponse> {
    return this.http.get<IGetVideosResponse>('http://localhost:4000/video');
  }
}
