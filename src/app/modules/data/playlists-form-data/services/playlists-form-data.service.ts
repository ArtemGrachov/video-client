import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { PlaylistsListDataService } from '../../playlists-list-data/services/playlists-list-data.service';

import { IGetPlaylistsQuery, IGetPlaylistsResponse } from 'src/app/types/api/playlist-api.interface';

@Injectable()
export class PlaylistsFormDataService {
  public readonly form = new FormGroup({
    page: new FormControl(1),
    search: new FormControl(''),
  });

  constructor(private playlistsListDataService: PlaylistsListDataService) { }

  public setValue(value: IGetPlaylistsQuery): void {
    this.form.patchValue(value);
  }

  public update(): Observable<IGetPlaylistsResponse> {
    const formValue = this.form.getRawValue();
    return this.playlistsListDataService.getPlaylists(formValue);
  }
}
