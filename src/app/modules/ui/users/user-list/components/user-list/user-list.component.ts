import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { IUser } from 'src/app/types/models/user.interface';
import { IPagination } from 'src/app/types/other/pagination.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  @Input()
  public users!: IUser[];

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

  public trackBy(index: number, item: IUser): number {
    return item.id;
  }
}
