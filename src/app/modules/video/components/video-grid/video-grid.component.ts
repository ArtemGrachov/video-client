import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IVideo } from 'src/app/types/models/video.interface';

@Component({
  selector: 'app-video-grid',
  templateUrl: './video-grid.component.html',
  styleUrls: ['./video-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoGridComponent {
  @Input('videos')
  public videos!: IVideo[];
}
