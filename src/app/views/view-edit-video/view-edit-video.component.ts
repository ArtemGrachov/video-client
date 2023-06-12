import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map } from 'rxjs';

import { EStatus } from 'src/app/constants/status';

import { VideoDataService } from 'src/app/modules/data/video-data/services/video-data.service';
import { VideoFormDataService } from 'src/app/modules/data/video-form-data/services/video-form-data.service';

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
    private videoDataService: VideoDataService,
    private videoFormDataService: VideoFormDataService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
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
}
