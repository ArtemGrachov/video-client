import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { IPlaylist } from 'src/app/types/models/playlist.interface';
import { IPagination } from 'src/app/types/other/pagination.interface';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistListComponent {
  @Input()
  public playlists!: IPlaylist[];

  @Input()
  public pagination?: IPagination | null

  @Output('getPrevPage')
  private emitGetPrevPage: EventEmitter<void> = new EventEmitter();

  @Output('getNextPage')
  private emitGetNextPage: EventEmitter<void> = new EventEmitter();

  public get showPreviousPage(): boolean {
    if (this.pagination?.lowerPage == null) {
      return false;
    }

    return this.pagination.lowerPage > 1;
  }

  public get showNextPage(): boolean {
    if (this.pagination?.upperPage == null) {
      return false;
    }

    return this.pagination.upperPage < this.pagination.totalPages;
  }

  public prevPageHandler(): void {
    this.emitGetPrevPage.emit();
  }

  public nextPageHandler(): void {
    this.emitGetNextPage.emit();
  }
}
