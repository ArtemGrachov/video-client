import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from '@looorent/ngx-simple-modal';

import { PlaylistsFormDataService } from 'src/app/modules/data/playlists-form-data/services/playlists-form-data.service';
import { PlaylistsListDataService } from 'src/app/modules/data/playlists-list-data/services/playlists-list-data.service';
import { UserDataService } from 'src/app/modules/data/user-data/services/user-data.service';

import { IGetPlaylistsQuery } from 'src/app/types/api/playlist-api.interface';

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
    private userDataService: UserDataService,
  ) {
    super();
  }

  public items$ = this.playlistsListDataService.items$;

  public pagination$ = this.playlistsListDataService.pagination$;

  public ngOnInit(): void {
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
}
