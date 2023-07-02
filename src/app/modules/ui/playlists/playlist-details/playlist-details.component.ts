import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IPlaylist } from 'src/app/types/models/playlist.interface';
import { IUser } from 'src/app/types/models/user.interface';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistDetailsComponent {
  @Input()
  public playlist!: IPlaylist;

  public get playlistName(): string {
    return this.playlist.name;
  }

  public get author(): IUser | null {
    return this.playlist.author ?? null;
  }

  public get description(): string {
    return this.playlist.description;
  }

  public get authorLink(): string[] {
    if (!this.author) {
      return [];
    }

    return ['/', 'user', this.author.id.toString()];
  }
}
