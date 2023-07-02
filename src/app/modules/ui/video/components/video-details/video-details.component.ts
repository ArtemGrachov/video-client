import { ChangeDetectionStrategy, Component, Input, Optional } from '@angular/core';

import { AuthService } from 'src/app/modules/data/auth/services/auth.service';
import { ViewPlaylistAddVideoModalService } from 'src/app/views/view-playlist-add-video/services/view-playlist-add-video-modal.service';

import { IUser } from 'src/app/types/models/user.interface';
import { IVideo } from 'src/app/types/models/video.interface';
import { ViewLoginModalService } from 'src/app/views/view-login/services/view-login-modal.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoDetailsComponent {
  @Input()
  public video!: IVideo;

  constructor(
    private authService: AuthService,
    private viewLoginModalService: ViewLoginModalService,
    @Optional() private viewPlaylistAddVideoModalService: ViewPlaylistAddVideoModalService
  ) {}

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

  public addToPlaylistHandler(): void {
    if (!this.authService.isAuthorized) {
      this.viewLoginModalService.showModal();
      return;
    }

    this.viewPlaylistAddVideoModalService?.showModal(this.video);
  }
}
