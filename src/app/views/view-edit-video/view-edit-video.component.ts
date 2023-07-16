import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { L10nTranslationService } from 'angular-l10n';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable, map, switchMap, tap } from 'rxjs';

import { EStatus } from 'src/app/constants/status';

import { ModalConfirmationService } from 'src/app/modules/ui/modals/modal-confirmation/services/modal-confirmation.service';
import { VideoDataService } from 'src/app/services/video-data/video-data.service';
import { VideoFormDataService } from 'src/app/services/video-form-data/video-form-data.service';

import { IUpdateVideoPayload } from 'src/app/types/api/video-api.interface';
import { IVideo } from 'src/app/types/models/video.interface';

@Component({
  selector: 'app-view-edit-video',
  templateUrl: './view-edit-video.component.html',
  styleUrls: ['./view-edit-video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewEditVideoComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private videoDataService: VideoDataService,
    private videoFormDataService: VideoFormDataService,
    private modalConfirmationService: ModalConfirmationService,
    private translationService: L10nTranslationService,
  ) {}

  public get videoId(): number {
    return +this.route.snapshot.params['id'];
  }

  public video$: Observable<IVideo> = this.videoDataService.data$ as Observable<IVideo>;

  public videoName$: Observable<string> = this.video$.pipe(map(video => video.name));

  public submitStatus$: Observable<EStatus> = this.videoFormDataService.submitStatus$;

  public submitError$: Observable<any> = this.videoFormDataService.submitError$;

  public submitHandler(formValue: IUpdateVideoPayload): void {
    const payload = { ...formValue };

    if (typeof payload.video === 'string') {
      delete payload.video;
    }

    this
      .videoFormDataService
      .updateVideo(this.videoId, formValue)
      .subscribe({
        next: video => {
          this
            .toastr
            .success(this.translationService.translate('view_edit_video.create_success'));
          this.router.navigate(['/', 'video', video.id]);
        },
        error: () => this
          .toastr
          .error(this.translationService.translate('view_edit_video.create_error')),
      });
  }

  public deleteHandler(): void {
    this.modalConfirmationService.showModal({
      title: this.translationService.translate('view_edit_video.delete_confirm_title'),
      question: this.translationService.translate('view_edit_video.delete_confirm_description,')
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
                  this.translationService.translate('view_edit_video.delete_success'),
                );
                this.router.navigate(['/']);
              },
              error: () => this.toastr.error(
                this.translationService.translate('view_edit_video.delete_error'),
              ),
            })
          )
      })
    )
    .subscribe();
  }
}
