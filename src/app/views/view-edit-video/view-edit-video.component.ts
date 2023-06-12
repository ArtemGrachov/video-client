import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable, map, switchMap, tap } from 'rxjs';

import { EStatus } from 'src/app/constants/status';

import { VideoDataService } from 'src/app/modules/data/video-data/services/video-data.service';
import { VideoFormDataService } from 'src/app/modules/data/video-form-data/services/video-form-data.service';
import { ModalConfirmationService } from 'src/app/modules/ui/modals/modal-confirmation/services/modal-confirmation.service';

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
          this.toastr.success('Video updated successfully')
          this.router.navigate(['/', 'video', video.id]);
        },
        error: () => this.toastr.error('Video updating error'),
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
