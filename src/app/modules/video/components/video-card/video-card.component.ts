import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IVideo } from 'src/app/types/models/video.interface';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoCardComponent {
  @Input('video')
  public video!: IVideo;

  public get videoName(): string {
    return this.video.name;
  }

  public get thumbnailSrc(): string {
    return this.video.media.thumbnailUrl;
  }
}
