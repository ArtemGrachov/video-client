import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as dayjs from 'dayjs';

import { AuthService } from 'src/app/modules/data/auth/services/auth.service';
import { ViewCommentEditModalService } from 'src/app/views/views-comment-edit/services/view-comment-edit-modal.service';
import { ModalConfirmationService } from '../../../modals/modal-confirmation/services/modal-confirmation.service';

import { IComment } from 'src/app/types/models/comment.interface';
import { IUser } from 'src/app/types/models/user.interface';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentItemComponent {
  @Input()
  public comment!: IComment;

  constructor(
    private authService: AuthService,
    private viewCommentEditModalService: ViewCommentEditModalService,
    private modalConfirmationService: ModalConfirmationService,
  ) {}

  public get content(): string {
    return this.comment.content;
  }

  public get createdAt(): string {
    return this.comment.createdAt;
  }

  public get createdAtFormatted(): string {
    return dayjs(this.createdAt).format('DD.MM.YYYY');
  }

  public get author(): IUser | null {
    return this.comment.author ?? null;
  }

  public get authorName(): string | null {
    return this.author?.name ?? null;
  }

  public get authorAvatarSrc(): string | null {
    return this.author?.avatar?.url ?? null;
  }

  public get userIsAuthor(): boolean {
    if (!this.authService.userDataSnapshot) {
      return false;
    }

    return this.author?.id === this.authService.userDataSnapshot?.id;
  }

  public get allowEdit(): boolean {
    return this.userIsAuthor;
  }

  public get allowDelete(): boolean {
    return this.userIsAuthor;
  }

  public editHandler(): void {
    this.viewCommentEditModalService.showModal(this.comment);
  }

  public deleteHandler(): void {
    this.modalConfirmationService.showModal({
      title: 'Confirm deleting',
      question: 'Are you sure you want to delete this comment?'
    }).subscribe(result => {
      if (result) {
        console.log('@todo delete comment');
        return;
      }

      console.log('@todo leave comment');
    })
  }
}
