import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { VideoDataService } from '../../video-data/services/video-data.service';
import { IGetVideosQuery } from 'src/app/types/api/video-api.interface';

@Injectable()
export class VideoListFormService {
  public readonly form = new FormGroup({
    page: new FormControl(1),
    search: new FormControl(''),
    subscriptions: new FormControl(false)
  });

  constructor(private videoDataService: VideoDataService) { }

  public setValue(value: IGetVideosQuery): void {
    this.form.patchValue(value);
  }

  public update(): void {
    const formValue = this.form.getRawValue();
    this.videoDataService.getVideos(formValue);
  }
}
