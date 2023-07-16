import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SimpleModalComponent } from '@looorent/ngx-simple-modal';
import { L10nTranslationService } from 'angular-l10n';
import { ToastrService } from 'ngx-toastr';

import { EStatus } from 'src/app/constants/status';

import { CommentsListDataService } from 'src/app/services/comments-list-data/comments-list-data.service';

import { IEditCommentPayload } from 'src/app/types/api/comments-api.interface';
import { IComment } from 'src/app/types/models/comment.interface';

@Component({
  selector: 'app-views-comment-edit',
  templateUrl: './views-comment-edit.component.html',
  styleUrls: ['./views-comment-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewsCommentEditComponent extends SimpleModalComponent<{ comment: IComment }, void> {
  public comment!: IComment;

  constructor(
    private toastr: ToastrService,
    private commentsListDataService: CommentsListDataService,
    private translationService: L10nTranslationService,
  ) {
    super();
  }

  public get submitStatus(): EStatus {
    return this.comment.editStatus ?? EStatus.INIT;
  }

  public get submitError(): any {
    return this.comment.editError ?? null;
  }

  public submitHandler(formValue: IEditCommentPayload): void {
    this.commentsListDataService
      .updateComment(this.comment.id, formValue)
      .subscribe({
        next: () => {
          this.toastr.success(
            this.translationService.translate('view_comment_edit.edit_success'),
          );
          this.close();
        },
        error: () => this.toastr.error(
          this.translationService.translate('view_comment_edit.edit_error'),
        ),
      });
  }
}
