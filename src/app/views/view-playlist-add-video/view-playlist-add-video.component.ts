import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from '@looorent/ngx-simple-modal';

import { PlaylistsFormDataService } from 'src/app/modules/data/playlists-form-data/services/playlists-form-data.service';
import { PlaylistsListDataService } from 'src/app/modules/data/playlists-list-data/services/playlists-list-data.service';

@Component({
  selector: 'app-view-playlist-add-video',
  templateUrl: './view-playlist-add-video.component.html',
  styleUrls: ['./view-playlist-add-video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewPlaylistAddVideoComponent extends SimpleModalComponent<void, void> implements OnInit {
  constructor(
    private playlistsListDataService: PlaylistsListDataService,
    private playlistsFormDataService: PlaylistsFormDataService,
  ) {
    super();
  }

  public items$ = this.playlistsListDataService.items$;

  public pagination$ = this.playlistsListDataService.pagination$;

  public ngOnInit(): void {
    this.playlistsListDataService.getPlaylists(this.playlistsFormDataService.form.value).subscribe();
  }
}
