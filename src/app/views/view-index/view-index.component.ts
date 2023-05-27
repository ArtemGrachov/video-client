import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { skip } from 'rxjs';

import { VideoDataService } from 'src/app/modules/video-data/services/video-data.service';
import { VideoListFormService } from 'src/app/modules/video-list-form/services/video-list-form.service';
import { IGetVideosQuery } from 'src/app/types/api/video-api.interface';

@Component({
  selector: 'app-view-index',
  templateUrl: './view-index.component.html',
  styleUrls: ['./view-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewIndexComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private videoDataService: VideoDataService,
    private videoListFormService: VideoListFormService
  ) {}

  private querySbs = this
    .route
    .queryParams
    .pipe(skip(1))
    .subscribe(query => {
      const formValue = this.routeQueryToFormValue(query);
      this.videoListFormService.setValue(formValue);
      this.videoListFormService.update();
    });

  public items$ = this.videoDataService.items$;

  public pagination$ = this.videoDataService.pagination$;

  private routeQueryToFormValue(query: Params): IGetVideosQuery {
    const formValue: IGetVideosQuery = {};

    const page = +(query['page'] as string);

    if (!isNaN(page)) {
      formValue.page = page;
    }

    formValue.search = query['search'];

    return formValue;
  }

  private formValueToRouteQuery(formValue: IGetVideosQuery): Params {
    const result: Params = {
      search: formValue.search
    };

    if (formValue.page === 1) {
      result['page'] = null;
    } else {
      result['page'] = formValue.page;
    }

    return result;
  }

  public ngOnInit(): void {
    const formValue = this.routeQueryToFormValue(this.route.snapshot.queryParams);

    this.videoListFormService.setValue(formValue)
    this.videoListFormService.update();
  }

  public ngOnDestroy(): void {
    this.querySbs.unsubscribe();
  }

  private updateRoute(): void {
    const formValue = this.videoListFormService.form.value;
    const queryParams = this.formValueToRouteQuery(formValue);

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
