import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { L10nTranslationService } from 'angular-l10n';
import { Observable, map, skip } from 'rxjs';

import { USERS_PER_PAGE } from 'src/app/constants/users';

import { UsersListDataService } from 'src/app/services/users-list-data/users-list-data.service';
import { UsersListFormService } from 'src/app/services/users-list-form/users-list-form.service';
import { RouteHandlerService } from './services/route-handler.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewUsersComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private routeHandlerSerivce: RouteHandlerService,
    private usersListDataService: UsersListDataService,
    private usersListFormService: UsersListFormService,
    private translationService: L10nTranslationService,
  ) {}

  private querySbs = this
    .route
    .queryParams
    .pipe(skip(1))
    .subscribe(query => {
      const formValue = this.routeHandlerSerivce.routeQueryToFormValue(query);
      this.usersListFormService.fillValue(formValue);
      this.usersListFormService.update({ perPage: USERS_PER_PAGE }).subscribe();
    });

  public items$ = this.usersListDataService.items$;

  public pagination$ = this.usersListDataService.pagination$;

  public showPlaceholder$: Observable<boolean> = this.items$.pipe(map(items => items.length === 0));

  public processing$: Observable<boolean> = this.usersListDataService.processing$;

  public title$: Observable<string | null> = this.route.queryParams.pipe(map(query => {
    const searchQuery = query['search'];

    if (searchQuery) {
      return this.translationService.translate('view_users.search_title', { query: searchQuery });
    }

    return null;
  }));

  public showTitle$: Observable<boolean> = this.title$.pipe(map(title => Boolean(title)));

  public ngOnDestroy(): void {
    this.querySbs.unsubscribe();
  }

  private updateRoute(): void {
    const formValue = this.usersListFormService.form.value;
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
    const pageControl = this.usersListFormService.form.get('page');

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
