import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map } from 'rxjs';

import { EStatus } from 'src/app/constants/status';

import { PlaylistDataService } from 'src/app/services/playlist-data/playlist-data.service';
import { PlaylistFormDataService } from 'src/app/services/playlist-form-data/playlist-form-data.service';

import { IUpdatePlaylistPayload } from 'src/app/types/api/playlist-api.interface';

@Component({
  selector: 'app-view-playlist-edit',
  templateUrl: './view-playlist-edit.component.html',
  styleUrls: ['./view-playlist-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewPlaylistEditComponent {
  constructor(
    private playlistDataService: PlaylistDataService,
    private playlistFormDataService: PlaylistFormDataService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    ) {}

  public get playlistId(): number {
    return +this.route.snapshot.params['id'];
  }

  public playlist$ = this.playlistDataService.data$;

  public playlistName$ = this.playlist$.pipe(map(playlist => playlist!.name));

  public submitStatus$: Observable<EStatus> = this.playlistFormDataService.submitStatus$;

  public submitError$: Observable<any> = this.playlistFormDataService.submitError$;

  public submitHandler(formValue: IUpdatePlaylistPayload): void {
    this
      .playlistFormDataService
      .updatePlaylist(this.playlistId, formValue)
      .subscribe({
        next: playlist => {
          this.toastr.success('Playlist updated successfully')
          this.router.navigate(['/', 'playlists', playlist.id]);
        },
        error: () => this.toastr.error('Playlist updating error')
      });
  }
}
