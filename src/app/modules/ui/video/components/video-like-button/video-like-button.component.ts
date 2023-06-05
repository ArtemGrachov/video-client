import { ChangeDetectionStrategy, Component, Input, Optional } from '@angular/core';
import { Observable, map, of, startWith } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { EStatus } from 'src/app/constants/status';

import { VideoDataService } from 'src/app/modules/data/video-data/services/video-data.service';
import { VideoLikeDataService } from 'src/app/modules/data/video-data/services/video-like-data.service';

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
    @Optional() private videoLikeDataService: VideoLikeDataService,
    private toastrService: ToastrService,
  ) {}

  public likeStatus$: Observable<EStatus> = this.videoLikeDataService?.likeStatus$ ?? of(EStatus.INIT);

  public likeProcessing$: Observable<boolean> = this.likeStatus$.pipe(
    startWith(false),
    map(status => status === EStatus.PROCESSING)
  );

  private get isActive(): boolean {
    return this.video != null && this.videoDataService != null;
  }

  public get likesCount(): number {
    return this.video?.likesCount ?? 0;
  }

  public get isLiked(): boolean {
    return this.video?.isLiked ?? false;
  }

  public like(): void {
    if (!this.isActive) {
      return;
    }

    this
      .videoDataService
      .likeVideo()
      .subscribe({
        error: () => {
          this.toastrService.error('Liking video error');
        },
      });
  }
}
