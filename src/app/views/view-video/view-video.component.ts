import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { L10nTranslationService } from 'angular-l10n';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable, combineLatest, map, switchMap, tap } from 'rxjs';

import { EStatus } from 'src/app/constants/status';

import { ModalConfirmationService } from 'src/app/modules/ui/modals/modal-confirmation/services/modal-confirmation.service';

import { AuthService } from 'src/app/services/auth/auth.service';
import { CommentFormDataService } from 'src/app/services/comment-form-data/comment-form-data.service';
import { CommentsListDataService } from 'src/app/services/comments-list-data/comments-list-data.service';
import { CommentsListFormService } from 'src/app/services/comments-list-form/comments-list-form.service';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { VideoDataService } from 'src/app/services/video-data/video-data.service';

import { ICreateCommentPayload } from 'src/app/types/api/comments-api.interface';
import { IUser } from 'src/app/types/models/user.interface';
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
    private userDataService: UserDataService,
    private commentsListDataService: CommentsListDataService,
    private commentsListFormService: CommentsListFormService,
    private commentFormDataService: CommentFormDataService,
    private modalConfirmationService: ModalConfirmationService,
    private translationService: L10nTranslationService,
  ) {}

  public commentsData$ = this.commentsListDataService.data$;

  public comments$ = this.commentsListDataService.items$;

  public commentsPagination$ = this.commentsListDataService.pagination$;

  public video$: Observable<IVideo | null> = combineLatest([
    this.videoDataService.data$,
    this.userDataService.data$,
  ]).pipe(
    map(
      ([video, user]) => {
        return {
          ...video as IVideo,
          author: user as IUser,
        }
      }
    )
  );

  public showVideo$: Observable<boolean> = this.video$.pipe(map(v => Boolean(v)));

  public showComments$: Observable<boolean> = this.commentsData$.pipe(map(v => Boolean(v)));

  public commentFormSubmitStatus$: Observable<EStatus> = this.commentFormDataService.submitStatus$;

  public commentFormSubmitError$: Observable<any> = this.commentFormDataService.submitError$;

  public commentsProcessing$: Observable<boolean> = this.commentsListDataService.processing$;

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
        error: () => this.toastr.error(
          this.translationService.translate('view_video.create_comment_error'),
        ),
      });
  }

  public deleteHandler(): void {
    this.modalConfirmationService.showModal({
      title: this.translationService.translate('view_video.delete_title'),
      question: this.translationService.translate('view_video.delete_description')
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
                this.toastr.success(
                  this.translationService.translate('view_video.delete_success'),
                );
                this.router.navigate(['/']);
              },
              error: () => this.toastr.error(
                this.translationService.translate('view_video.delete_error'),
              ),
            })
          )
      })
    )
    .subscribe();
  }
}
