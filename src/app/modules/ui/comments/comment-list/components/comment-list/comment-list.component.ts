import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { IComment } from 'src/app/types/models/comment.interface';
import { IPagination } from 'src/app/types/other/pagination.interface';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentListComponent {
  @Input()
  public comments: IComment[] = [];

  @Input()
  public pagination?: IPagination | null

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

  public prevPageHandler(): void {
    this.getPrevPageEmitter.emit();
  }

  public nextPageHandler(): void {
    this.getNextPageEmitter.emit();
  }

  public trackBy(index: number, item: IComment): number {
    return item.id;
  }
}
