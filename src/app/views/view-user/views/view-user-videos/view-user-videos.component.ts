import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { skip } from 'rxjs';

import { RouteHandlerService } from './services/route-handler.service';
import { VideoListDataService } from 'src/app/modules/data/video-list-data/services/video-list-data.service';
import { VideoListFormService } from 'src/app/modules/data/video-list-form/services/video-list-form.service';
import { IGetVideosQuery } from 'src/app/types/api/video-api.interface';

@Component({
  selector: 'app-view-user-videos',
  templateUrl: './view-user-videos.component.html',
  styleUrls: ['./view-user-videos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewUserVideosComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private routeHandlerSerivce: RouteHandlerService,
    private videoListDataService: VideoListDataService,
    private videoListFormService: VideoListFormService,
  ) {}

  private querySbs = this
    .route
    .queryParams
    .pipe(skip(1))
    .subscribe(query => {
      const formValue = this.routeHandlerSerivce.routeQueryToFormValue(query);
      this.videoListFormService.setValue(formValue);
      this
        .videoListFormService
        .update({
          userIds: [this.route.snapshot.params['id']]
        } as IGetVideosQuery)
        .subscribe();
    });

  public items$ = this.videoListDataService.items$;

  public pagination$ = this.videoListDataService.pagination$;

  public ngOnDestroy(): void {
    this.querySbs.unsubscribe();
  }

  private updateRoute(): void {
    const formValue = this.videoListFormService.form.value;
    const queryParams = this.routeHandlerSerivce.formValueToRouteQuery(formValue);

    this.router.navigate(
      ['.'],
      {
        relativeTo: this.route,
        queryParams,
        queryParamsHandling: 'merge'
      }
    );
  }

  private changePage(shift: number = 0): void {
    const pageControl = this.videoListFormService.form.get('page');

    if (!pageControl) {
      return;
    }

    const currentPage = pageControl.value ?? 1;
    const page = currentPage + shift;

    pageControl.setValue(page);
    this.updateRoute();
  }

  public getPrevPageHandler(): void {
    this.changePage(-1);
  }

  public getNextPageHandler(): void {
    this.changePage(1);
  }
}
