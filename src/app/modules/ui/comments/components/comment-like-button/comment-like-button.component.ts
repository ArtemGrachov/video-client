import { ChangeDetectionStrategy, Component, Input, Optional } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { EStatus } from 'src/app/constants/status';

import { AuthService } from 'src/app/modules/data/auth/services/auth.service';
import { CommentsListDataService } from 'src/app/modules/data/comments-list-data/services/comments-list-data.service';
import { ViewLoginModalService } from 'src/app/views/view-login/services/view-login-modal.service';

import { IComment } from 'src/app/types/models/comment.interface';

@Component({
  selector: 'app-comment-like-button',
  templateUrl: './comment-like-button.component.html',
  styleUrls: ['./comment-like-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentLikeButtonComponent {
  @Input()
  public comment?: IComment;

  constructor(
    @Optional() private commentsListDataService: CommentsListDataService,
    private toastrService: ToastrService,
    private authService: AuthService,
    private viewLoginModalService: ViewLoginModalService,
  ) {}

  public get likeStatus(): EStatus {
    return this.comment?.likeStatus ?? EStatus.INIT;
  }

  public get likeProcessing(): boolean {
    return this.likeStatus === EStatus.PROCESSING;
  }

  private get isActive(): boolean {
    return this.comment != null && this.commentsListDataService != null;
  }

  public get likesCount(): number {
    return this.comment?.likesCount ?? 0;
  }

  public get isLiked(): boolean {
    return this.comment?.isLiked ?? false;
  }

  public like(): void {
    if (!this.isActive) {
      return;
    }

    if (!this.authService.isAuthorized) {
      this.viewLoginModalService.showModal();
      return;
    }

    if (this.likeProcessing) {
      return;
    }

    this.commentsListDataService.likeComment(this.comment!.id, !this.isLiked)
      .subscribe({
        error: () => {
          this.toastrService.error('Liking comment error');
        },
      });
  }
}
