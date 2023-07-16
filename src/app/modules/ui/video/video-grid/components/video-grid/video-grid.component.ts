import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

import { IVideo } from 'src/app/types/models/video.interface';
import { IPagination } from 'src/app/types/other/pagination.interface';

@Component({
  selector: 'app-video-grid',
  templateUrl: './video-grid.component.html',
  styleUrls: ['./video-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoGridComponent implements OnChanges {
  @Input()
  public videos!: IVideo[];

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

  public get showSkeletonPrev(): boolean {
    return Boolean(this.processing) && this.loadingPrev;
  }

  public get showSkeletonNext(): boolean {
    return Boolean(this.processing) && this.loadingNext;
  }

  public prevPageHandler(): void {
    this.loadingPrev = true;
    this.emitGetPrevPage.emit();
  }

  public nextPageHandler(): void {
    this.loadingNext = true;
    this.emitGetNextPage.emit();
  }

  public trackBy(index: number, item: IVideo): number {
    return item.id;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['processing']?.currentValue === false) {
      this.loadingPrev = false;
      this.loadingNext = false;
    }
  }
}
