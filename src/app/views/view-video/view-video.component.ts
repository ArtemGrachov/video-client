import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable, map, switchMap, tap } from 'rxjs';

import { EStatus } from 'src/app/constants/status';

import { AuthService } from 'src/app/modules/data/auth/services/auth.service';
import { CommentFormDataService } from 'src/app/modules/data/comment-form-data/services/comment-form-data.service';
import { CommentsListDataService } from 'src/app/modules/data/comments-list-data/services/comments-list-data.service';
import { CommentsListFormService } from 'src/app/modules/data/comments-list-form/services/comments-list-form.service';
import { VideoDataService } from 'src/app/modules/data/video-data/services/video-data.service';
import { ModalConfirmationService } from 'src/app/modules/ui/modals/modal-confirmation/services/modal-confirmation.service';

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
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService,
    private videoDataService: VideoDataService,
    private commentsListDataService: CommentsListDataService,
    private commentsListFormService: CommentsListFormService,
    private commentFormDataService: CommentFormDataService,
    private modalConfirmationService: ModalConfirmationService,
  ) {}

  public commentsData$ = this.commentsListDataService.data$;

  public comments$ = this.commentsListDataService.items$;

  public commentsPagination$ = this.commentsListDataService.pagination$;

  public video$: Observable<IVideo | null> = this.videoDataService.data$;

  public showVideo$: Observable<boolean> = this.video$.pipe(map(v => Boolean(v)));

  public showComments$: Observable<boolean> = this.commentsData$.pipe(map(v => Boolean(v)));

  public commentFormSubmitStatus$: Observable<EStatus> = this.commentFormDataService.submitStatus$;

  public commentFormSubmitError$: Observable<any> = this.commentFormDataService.submitError$;

  public userIsAuthor$: Observable<boolean> = this
    .video$
    .pipe(map(video => video!.authorId === this.authService.userDataSnapshot?.id));

  public get videoId(): number {
    return +this.route.snapshot.params['id'];
  }

  public get showCommentsForm(): boolean {
    return this.authService.isAuthorized;
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

  public deleteHandler(): void {
    this.modalConfirmationService.showModal({
      title: 'Confirm deleting',
      question: 'Are you sure you want to delete this video?'
    })
    .pipe(
      switchMap(result => {
        if (!result) {
          return EMPTY;
        }

        return this
          .videoDataService
          .deleteVideo()
          .pipe(
            tap({
              next: () => {
                this.toastr.success('Video deleted successfully');
                this.router.navigate(['/']);
              },
              error: () => this.toastr.error('Video deleting error'),
            })
          )
      })
    )
    .subscribe();
  }
}
