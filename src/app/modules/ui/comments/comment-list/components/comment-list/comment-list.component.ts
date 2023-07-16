import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

import { IComment } from 'src/app/types/models/comment.interface';
import { IPagination } from 'src/app/types/other/pagination.interface';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentListComponent implements OnChanges {
  @Input()
  public comments: IComment[] = [];

  @Input()
  public pagination?: IPagination | null

  @Input()
  public processing?: boolean;

  private loadingPrev: boolean = false;

  private loadingNext: boolean = false;

  @Output('getPrevPage')
  private getPrevPageEmitter: EventEmitter<void> = new EventEmitter();

  @Output('getNextPage')
  private getNextPageEmitter: EventEmitter<void> = new EventEmitter();

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
    this.getPrevPageEmitter.emit();
  }

  public nextPageHandler(): void {
    this.loadingPrev = true;
    this.getNextPageEmitter.emit();
  }

  public trackBy(index: number, item: IComment): number {
    return item.id;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['processing']?.currentValue === false) {
      this.loadingPrev = false;
      this.loadingNext = false;
    }
  }
}
