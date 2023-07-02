import { ChangeDetectionStrategy, Component, Input, Optional } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, combineLatest, map, of, switchMap, tap } from 'rxjs';

import { AuthService } from 'src/app/modules/data/auth/services/auth.service';
import { PlaylistDataService } from 'src/app/modules/data/playlist-data/services/playlist-data.service';
import { VideoListDataService } from 'src/app/modules/data/video-list-data/services/video-list-data.service';
import { ModalConfirmationService } from '../../../modals/modal-confirmation/services/modal-confirmation.service';

import { IUser } from 'src/app/types/models/user.interface';
import { IVideo } from 'src/app/types/models/video.interface';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoCardComponent {
  @Input('video')
  public video!: IVideo;

  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    private modalConfirmationService: ModalConfirmationService,
    @Optional() private playlistDataService: PlaylistDataService,
    @Optional() private videoListDataService: VideoListDataService,
  ) {}

  public showRemoveButton$: Observable<boolean> = this.playlistDataService ?
    combineLatest([this.playlistDataService.data$, this.authService.userData$])
      .pipe(map(([playlist, user]) => {
        if (!user) {
          return false;
        }

        return playlist?.authorId === user.id;
      }))
    : of(false);

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

  public get isLiked(): boolean {
    return this.video.isLiked;
  }

  public get videoLink(): string[] {
    return ['/', 'video', this.video.id.toString()];
  }

  public deleteHandler(): void {
    if (!this.playlistDataService?.dataSnapshot || !this.videoListDataService) {
      return;
    }

    this.modalConfirmationService.showModal({
      title: 'Confirm deleting',
      question: 'Are you sure you want to delete this video from the playlist?'
    })
    .pipe(
      switchMap(result => {
        if (!result) {
          return of(null);
        }

        return this
          .videoListDataService
          .deleteVideoFromPlaylist(
            this.playlistDataService.dataSnapshot!.id,
            this.video.id,
          )
          .pipe(tap({
            next: () => this.toastr.success('Video deleted from the playlist successfully'),
            error: () => this.toastr.success('Deleted video from playlist error'),
          }));
      })
    )
    .subscribe();
  }
}
