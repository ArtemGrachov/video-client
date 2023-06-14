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

  public get authorName(): string | null {
    return this.author?.name ?? null;
  }

  public get authorAvatarSrc(): string | null {
    return this.author?.avatar?.url ?? null;
  }

  public get description(): string {
    return this.playlist.description;
  }
}
