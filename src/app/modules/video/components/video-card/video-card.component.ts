import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/types/models/user.interface';
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
