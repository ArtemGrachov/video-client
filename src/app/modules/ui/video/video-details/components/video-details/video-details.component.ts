import { ChangeDetectionStrategy, Component, Inject, Input, Optional } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { VIDEO_AUTHOR_SERVICE } from 'src/app/tokens/video';
import { EStatus } from 'src/app/constants/status';

import { ViewPlaylistAddVideoModalService } from 'src/app/views/view-playlist-add-video/services/view-playlist-add-video-modal.service';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { ViewLoginModalService } from 'src/app/views/view-login/services/view-login-modal.service';
import { AuthService } from 'src/app/services/auth/auth.service';

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

  constructor(
    private authService: AuthService,
    private viewLoginModalService: ViewLoginModalService,
    @Inject(VIDEO_AUTHOR_SERVICE) private videoAuthorService: UserDataService,
    @Optional() private viewPlaylistAddVideoModalService: ViewPlaylistAddVideoModalService,
    private toastrService: ToastrService,
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

  public get isSubscription(): boolean {
    return Boolean(this.author?.isSubscription);
  }

  public get subscribeProcessing(): boolean {
    return this.author?.subscribeStatus === EStatus.PROCESSING;
  }

  public get subscribeLabel(): string {
    if (this.isSubscription) {
      return 'Unsubscribe';
    }

    return 'Subscribe';
  }

  public addToPlaylistHandler(): void {
    if (!this.authService.isAuthorized) {
      this.viewLoginModalService.showModal();
      return;
    }

    this.viewPlaylistAddVideoModalService?.showModal(this.video);
  }

  public subscribeHandler(): void {
    if (!this.authService.isAuthorized) {
      this.viewLoginModalService.showModal();
      return;
    }

    this
      .videoAuthorService
      .updateSubscription(!this.isSubscription)
      .subscribe({
        error: () => this.toastrService.error('Subscription update error'),
      });
  }
}
