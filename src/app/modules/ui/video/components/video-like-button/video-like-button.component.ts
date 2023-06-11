import { ChangeDetectionStrategy, Component, Input, Optional } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { EStatus } from 'src/app/constants/status';

import { VideoDataService } from 'src/app/modules/data/video-data/services/video-data.service';
import { AuthService } from 'src/app/modules/data/auth/services/auth.service';
import { ViewLoginModalService } from 'src/app/views/view-login/services/view-login-modal.service';

import { IVideo } from 'src/app/types/models/video.interface';

@Component({
  selector: 'app-video-like-button',
  templateUrl: './video-like-button.component.html',
  styleUrls: ['./video-like-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoLikeButtonComponent {
  @Input()
  public video?: IVideo;

  constructor(
    @Optional() private videoDataService: VideoDataService,
    private toastrService: ToastrService,
    private authService: AuthService,
    private viewLoginModalService: ViewLoginModalService,
  ) {}

  public get likeStatus(): EStatus {
    return this.video?.likeStatus ?? EStatus.INIT;
  }

  public get likeProcessing(): boolean {
    return this.likeStatus === EStatus.PROCESSING;
  }

  private get isActive(): boolean {
    return this.video != null && this.videoDataService != null;
  }

  public get likesCount(): number {
    return this.video?.likesCount ?? 0;
  }

  public get isLiked(): boolean {
    return this.video?.isLiked ?? false;
  }

  public likeHandler(): void {
    if (!this.isActive || this.likeProcessing) {
      return;
    }

    if (!this.authService.isAuthorized) {
      this.viewLoginModalService.showModal();
      return;
    }

    this.videoDataService.likeVideo(!this.isLiked)
      .subscribe({
        error: () => {
          this.toastrService.error('Liking video error');
        },
      });
  }
}
