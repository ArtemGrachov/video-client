import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map } from 'rxjs';

import { EStatus } from 'src/app/constants/status';

import { CommentFormDataService } from 'src/app/modules/data/comment-form-data/services/comment-form-data.service';
import { CommentsListDataService } from 'src/app/modules/data/comments-list-data/services/comments-list-data.service';
import { CommentsListFormService } from 'src/app/modules/data/comments-list-form/services/comments-list-form.service';
import { VideoDataService } from 'src/app/modules/data/video-data/services/video-data.service';

import { ICreateCommentPayload } from 'src/app/types/api/comments-api.interface';
import { IVideo } from 'src/app/types/models/video.interface';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrls: ['./view-video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewVideoComponent {
  constructor(
    private videoDataService: VideoDataService,
    private commentsListDataService: CommentsListDataService,
    private commentsListFormService: CommentsListFormService,
    private commentFormDataService: CommentFormDataService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
  ) {}

  public commentsData$ = this.commentsListDataService.data$;

  public comments$ = this.commentsListDataService.items$;

  public commentsPagination$ = this.commentsListDataService.pagination$;

  public video$: Observable<IVideo | null> = this.videoDataService.data$;

  public showVideo$: Observable<boolean> = this.video$.pipe(map(v => Boolean(v)));

  public showComments$: Observable<boolean> = this.commentsData$.pipe(map(v => Boolean(v)));

  public commentFormSubmitStatus$: Observable<EStatus> = this.commentFormDataService.submitStatus$;

  public commentFormSubmitError$: Observable<any> = this.commentFormDataService.submitError$;

  private get videoId(): number {
    return +this.route.snapshot.params['id'];
  }

  private changeCommentsPage(shift: number = 0): void {
    const pageControl = this.commentsListFormService.form.get('page');

    if (!pageControl) {
      return;
    }

    const currentPage = pageControl.value ?? 1;
    const page = currentPage + shift;

    pageControl.setValue(page);
    this.commentsListFormService.update(this.videoId).subscribe();
  }

  public getCommentsPrevPageHandler(): void {
    this.changeCommentsPage(-1);
  }

  public getCommentsNextPageHandler(): void {
    this.changeCommentsPage(1);
  }

  public createCommentSubmitHandler(formValue: ICreateCommentPayload): void {
    this
      .commentFormDataService
      .createComment(this.videoId, formValue)
      .subscribe({
        error: () => this.toastr.error('Creating comment error'),
      });
  }
}
