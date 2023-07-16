import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { L10nTranslationService } from 'angular-l10n';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { EStatus } from 'src/app/constants/status';

import { PlaylistFormDataService } from 'src/app/services/playlist-form-data/playlist-form-data.service';

import { ICreatePlaylistPayload } from 'src/app/types/api/playlist-api.interface';

@Component({
  selector: 'app-view-playlist-create',
  templateUrl: './view-playlist-create.component.html',
  styleUrls: ['./view-playlist-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewPlaylistCreateComponent {
  constructor(
    private playlistFormDataService: PlaylistFormDataService,
    private toastr: ToastrService,
    private router: Router,
    private translationService: L10nTranslationService,
  ) {}

  public submitStatus$: Observable<EStatus> = this.playlistFormDataService.submitStatus$;

  public submitError$: Observable<any> = this.playlistFormDataService.submitError$;

  public submitHandler(formValue: ICreatePlaylistPayload): void {
    this
      .playlistFormDataService
      .createPlaylist(formValue)
      .subscribe({
        next: playlist => {
          this.toastr.success(
            this.translationService.translate('view_create_playlist.create_success'),
          );
          this.router.navigate(['/', 'playlists', playlist.id]);
        },
        error: () => this.toastr.error(
          this.translationService.translate('view_create_playlist.create_error'),
        ),
      });
  }
}
