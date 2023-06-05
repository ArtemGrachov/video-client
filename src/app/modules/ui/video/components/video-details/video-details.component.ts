import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IUser } from 'src/app/types/models/user.interface';
import { IVideo } from 'src/app/types/models/video.interface';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoDetailsComponent {
  @Input()
  public video!: IVideo;

  public get videoName(): string {
    return this.video.name;
  }

  public get videoDescription(): string {
    return this.video.description;
  }

  public get author(): IUser | null {
    return this.video.author ?? null;
  }

  public get authorName(): string | null {
    return this.author?.name ?? null;
  }

  public get authorAvatarSrc(): string | null {
    return this.author?.avatar?.url ?? null;
  }
}
