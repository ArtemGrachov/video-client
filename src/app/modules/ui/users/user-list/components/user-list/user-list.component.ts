import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

import { IUser } from 'src/app/types/models/user.interface';
import { IPagination } from 'src/app/types/other/pagination.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnChanges {
  @Input()
  public users!: IUser[];

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
    this.loadingPrev = true;
    this.emitGetNextPage.emit();
  }

  public trackBy(index: number, item: IUser): number {
    return item.id;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['processing']?.currentValue === false) {
      this.loadingPrev = false;
      this.loadingNext = false;
    }
  }
}
