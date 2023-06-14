import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IPlaylist } from 'src/app/types/models/playlist.interface';
import { IUser } from 'src/app/types/models/user.interface';

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistItemComponent {
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
}
