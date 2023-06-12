import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { EStatus } from 'src/app/constants/status';

import { VideoFormDataService } from 'src/app/modules/data/video-form-data/services/video-form-data.service';

import { ICreateVideoPayload } from 'src/app/types/api/video-api.interface';

@Component({
  selector: 'app-view-create-video',
  templateUrl: './view-create-video.component.html',
  styleUrls: ['./view-create-video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewCreateVideoComponent {
  constructor(
    private videoFormDataService: VideoFormDataService,
    private toastr: ToastrService,
    private router: Router,
  ) {}

  public submitStatus$: Observable<EStatus> = this.videoFormDataService.submitStatus$;

  public submitError$: Observable<any> = this.videoFormDataService.submitError$;

  public submitHandler(formValue: ICreateVideoPayload): void {
    this
      .videoFormDataService
      .createVideo(formValue)
      .subscribe({
        next: video => {
          this.toastr.success('Video created successfully')
          this.router.navigate(['/', 'video', video.id]);
        },
        error: () => this.toastr.error('Video creation error')
      });
  }
}
