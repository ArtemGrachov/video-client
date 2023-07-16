import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-video-card-skeleton',
  templateUrl: './video-card-skeleton.component.html',
  styleUrls: ['./video-card-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoCardSkeletonComponent { }
