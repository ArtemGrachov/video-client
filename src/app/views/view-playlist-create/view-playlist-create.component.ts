import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { EStatus } from 'src/app/constants/status';

import { PlaylistFormDataService } from 'src/app/modules/data/playlist-form-data/services/playlist-form-data.service';
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
  ) {}

  public submitStatus$: Observable<EStatus> = this.playlistFormDataService.submitStatus$;

  public submitError$: Observable<any> = this.playlistFormDataService.submitError$;

  public submitHandler(formValue: ICreatePlaylistPayload): void {
    this
      .playlistFormDataService
      .createPlaylist(formValue)
      .subscribe({
        next: playlist => {
          this.toastr.success('Playlist created successfully')
          this.router.navigate(['/', 'playlists', playlist.id]);
        },
        error: () => this.toastr.error('Playlist creation error')
      });
  }
}
