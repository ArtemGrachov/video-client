import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { VideoListDataService } from '../video-list-data/video-list-data.service';
import { IGetVideosQuery, IGetVideosResponse } from 'src/app/types/api/video-api.interface';

@Injectable()
export class VideoListFormService {
  public readonly form = new FormGroup({
    page: new FormControl(1),
    search: new FormControl(''),
    subscriptions: new FormControl(false)
  });

  constructor(private videoListDataService: VideoListDataService) { }

  public setValue(value: IGetVideosQuery): void {
    this.form.patchValue(value);
  }

  public update(query?: IGetVideosQuery): Observable<IGetVideosResponse> {
    const payload = { ...this.form.getRawValue() };

    if (query) {
      Object.assign(payload, query);
    }

    return this.videoListDataService.getVideos(payload);
  }

  public updatePlaylist(playlistId: number): Observable<IGetVideosResponse> {
    const formValue = this.form.getRawValue();
    return this.videoListDataService.getPlaylistVideos(playlistId, formValue);
  }
}
