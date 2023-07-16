import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { VideoListDataService } from '../video-list-data/video-list-data.service';
import { IGetVideosQuery, IGetVideosResponse } from 'src/app/types/api/video-api.interface';

const DEFAULT_VALUE = {
  page: 1,
  search: '',
  subscriptions: false,
};

@Injectable()
export class VideoListFormService {
  public readonly form = new FormGroup({
    page: new FormControl(1),
    search: new FormControl(''),
    subscriptions: new FormControl(false)
  });

  constructor(private videoListDataService: VideoListDataService) { }

  public fillForm(value: IGetVideosQuery): void {
    this.form.patchValue(Object.assign({}, DEFAULT_VALUE, value));
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
