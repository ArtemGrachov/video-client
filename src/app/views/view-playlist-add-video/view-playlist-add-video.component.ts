import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { SimpleModalComponent } from '@looorent/ngx-simple-modal';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { FormGroup } from '@angular/forms';

import { EStatus } from 'src/app/constants/status';

import { PlaylistsListDataService } from 'src/app/services/playlists-list-data/playlists-list-data.service';
import { PlaylistsFormDataService } from 'src/app/services/playlists-form-data/playlists-form-data.service';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { PlaylistAddVideoDataService } from 'src/app/services/playlist-add-video-data/playlist-add-video-data.service';

import { IGetPlaylistsQuery } from 'src/app/types/api/playlist-api.interface';
import { IVideo } from 'src/app/types/models/video.interface';
import { IFormAddToPlaylistValue } from 'src/app/types/forms/form-add-to-playlist.interface';

@Component({
  selector: 'app-view-playlist-add-video',
  templateUrl: './view-playlist-add-video.component.html',
  styleUrls: ['./view-playlist-add-video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewPlaylistAddVideoComponent extends SimpleModalComponent<{ video: IVideo }, void> implements OnInit {
  constructor(
    private toastr: ToastrService,
    private playlistsListDataService: PlaylistsListDataService,
    private playlistsFormDataService: PlaylistsFormDataService,
    @Inject('MAIN_USER_SERVICE') private userDataService: UserDataService,
    private playlistAddVideoDataService: PlaylistAddVideoDataService,
  ) {
    super();
  }

  public video!: IVideo;

  public items$ = this.playlistsListDataService.items$;

  public pagination$ = this.playlistsListDataService.pagination$;

  public submitStatus$: Observable<EStatus> = this.playlistAddVideoDataService.submitStatus$;

  public submitError$: Observable<any> = this.playlistAddVideoDataService.submitError$;

  private get playlistsForm(): FormGroup {
    return this.playlistsFormDataService.form;
  }

  public ngOnInit(): void {
    this.initPlaylists();
  }

  private initPlaylists(): void {
    if (this.playlistsListDataService.getStatusSnapshot !== EStatus.INIT) {
      return;
    }

    this.loadPlaylists();
  }

  private loadPlaylists(): void {
    const payload: IGetPlaylistsQuery = {
      ...this.playlistsFormDataService.form.value,
      userIds: [this.userDataService.dataSnapshot?.id!],
      perPage: 5,
    };

    this
      .playlistsListDataService
      .getPlaylists(payload)
      .subscribe();
  }

  public submitHandler(formValue: IFormAddToPlaylistValue): void {
    this
      .playlistAddVideoDataService
      .submit(formValue.playlist, { videoIds: [this.video.id] })
      .subscribe({
        next: () => {
          this.toastr.success('Video added to playlist successfully');
          this.close();
        },
        error: () => this.toastr.error('Adding video to playlist error'),
      });
  }

  public loadPlaylistsHandler(): void {
    if (this.playlistsListDataService.getStatusSnapshot === EStatus.PROCESSING) {
      return;
    }

    const pageControl = this.playlistsForm.get('page')!
    const currentPage = pageControl.value as number;

    if (currentPage >= (this.playlistsListDataService.paginationSnapshot?.totalPages ?? 1)) {
      return;
    }

    const nextPage = currentPage + 1;

    pageControl.patchValue(nextPage);
    this.loadPlaylists();
  }
}
