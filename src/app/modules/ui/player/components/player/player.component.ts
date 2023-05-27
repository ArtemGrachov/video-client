import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IVideo } from 'src/app/types/models/video.interface';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent {
  @Input('video')
  public video!: IVideo;

  public get src(): string {
    return this.video.media.url;
  }
}
