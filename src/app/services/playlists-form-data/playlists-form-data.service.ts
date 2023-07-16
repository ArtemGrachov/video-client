import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { PlaylistsListDataService } from '../playlists-list-data/playlists-list-data.service';

import { IGetPlaylistsQuery, IGetPlaylistsResponse } from 'src/app/types/api/playlist-api.interface';

const DEFAULT_VALUE = {
  page: 1,
  search: '',
};

@Injectable()
export class PlaylistsFormDataService {
  public readonly form = new FormGroup({
    page: new FormControl(1),
    search: new FormControl(''),
  });

  constructor(private playlistsListDataService: PlaylistsListDataService) { }

  public fillForm(value: IGetPlaylistsQuery): void {
    this.form.patchValue(Object.assign({}, DEFAULT_VALUE, value));
  }

  public update(query?: IGetPlaylistsQuery): Observable<IGetPlaylistsResponse> {
    const payload = { ...this.form.getRawValue() };

    if (query) {
      Object.assign(payload, query);
    }

    return this.playlistsListDataService.getPlaylists(payload);
  }
}
