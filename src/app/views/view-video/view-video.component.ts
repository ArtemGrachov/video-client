import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

import { VideoDataService } from 'src/app/modules/data/video-data/services/video-data.service';
import { IVideo } from 'src/app/types/models/video.interface';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrls: ['./view-video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewVideoComponent {
  constructor(private videoDataService: VideoDataService) {}

  public video$: Observable<IVideo | null> = this.videoDataService.data$;

  public showVideo$: Observable<boolean> = this.video$.pipe(map(v => Boolean(v)));
}
