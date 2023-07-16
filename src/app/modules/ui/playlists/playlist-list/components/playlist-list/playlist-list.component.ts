import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

import { IPlaylist } from 'src/app/types/models/playlist.interface';
import { IPagination } from 'src/app/types/other/pagination.interface';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistListComponent implements OnChanges {
  @Input()
  public playlists!: IPlaylist[];

  @Input()
  public pagination?: IPagination | null

  @Input()
  public processing?: boolean;

  private loadingPrev: boolean = false;

  private loadingNext: boolean = false;

  @Output('getPrevPage')
  private emitGetPrevPage: EventEmitter<void> = new EventEmitter();

  @Output('getNextPage')
  private emitGetNextPage: EventEmitter<void> = new EventEmitter();

  public get showSkeletonPrev(): boolean {
    return Boolean(this.processing) && this.loadingPrev;
  }

  public get showSkeletonNext(): boolean {
    return Boolean(this.processing) && this.loadingNext;
  }

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
    this.loadingPrev = true;
    this.emitGetPrevPage.emit();
  }

  public nextPageHandler(): void {
    this.loadingPrev = true;
    this.emitGetNextPage.emit();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['processing']?.currentValue === false) {
      this.loadingPrev = false;
      this.loadingNext = false;
    }
  }
}
