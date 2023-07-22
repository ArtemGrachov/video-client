import { ChangeDetectionStrategy, Component, Inject, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { L10N_LOCALE, L10nLocale, L10nTranslationService } from 'angular-l10n';
import { Observable, map, skip } from 'rxjs';

import { VideoListDataService } from 'src/app/services/video-list-data/video-list-data.service';
import { VideoListFormService } from 'src/app/services/video-list-form/video-list-form.service';
import { RouteHandlerService } from './services/route-handler.service';

@Component({
  selector: 'app-view-index',
  templateUrl: './view-index.component.html',
  styleUrls: ['./view-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewIndexComponent implements OnDestroy {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private routeHandlerSerivce: RouteHandlerService,
    private videoListDataService: VideoListDataService,
    private videoListFormService: VideoListFormService,
    @Inject(L10N_LOCALE) public locale: L10nLocale,
    private translationService: L10nTranslationService,
  ) {}

  private querySbs = this
    .route
    .queryParams
    .pipe(skip(1))
    .subscribe(query => {
      const formValue = this.routeHandlerSerivce.routeQueryToFormValue(query);
      this.videoListFormService.fillForm(formValue);
      this.videoListFormService.update().subscribe();
    });

  public items$ = this.videoListDataService.items$;

  public pagination$ = this.videoListDataService.pagination$;

  public showPlaceholder$: Observable<boolean> = this.items$.pipe(map(items => items.length === 0));

  public processing$: Observable<boolean> = this.videoListDataService.processing$;

  public title$: Observable<string | null> = this.route.queryParams.pipe(map(query => {
    const searchQuery = query['search'];

    if (searchQuery) {
      return this.translationService.translate('view_index.search_title', { query: searchQuery });
    }

    return null;
  }));

  public showTitle$: Observable<boolean> = this.title$.pipe(map(title => Boolean(title)));

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
