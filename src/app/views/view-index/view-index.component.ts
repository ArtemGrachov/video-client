import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { VideoDataService } from 'src/app/modules/video-data/services/video-data.service';

@Component({
  selector: 'app-view-index',
  templateUrl: './view-index.component.html',
  styleUrls: ['./view-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewIndexComponent implements OnInit {
  constructor(private videoDataService: VideoDataService) {}

  public items$ = this.videoDataService.items$;

  public ngOnInit(): void {
    this.videoDataService.getVideos();
  }
}
