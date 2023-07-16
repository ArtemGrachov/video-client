import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, combineLatest, map, skip } from 'rxjs';

import { AUTH_USER_SERVICE } from 'src/app/tokens/auth';

import { RouteHandlerService } from './services/route-handler.service';
import { PlaylistsListDataService } from 'src/app/services/playlists-list-data/playlists-list-data.service';
import { PlaylistsFormDataService } from 'src/app/services/playlists-form-data/playlists-form-data.service';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

import { IUser } from 'src/app/types/models/user.interface';

@Component({
  selector: 'app-view-user-playlists',
  templateUrl: './view-user-playlists.component.html',
  styleUrls: ['./view-user-playlists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewUserPlaylistsComponent {
  constructor(
    private userDataService: UserDataService,
    @Inject(AUTH_USER_SERVICE) private authUserService: UserDataService,
    private router: Router,
    private route: ActivatedRoute,
    private routeHandlerSerivce: RouteHandlerService,
    private playlistsListDataService: PlaylistsListDataService,
    private playlistsFormDataService: PlaylistsFormDataService,
  ) {}

  public userData$: Observable<IUser | null> = this.userDataService.data$;

  public isCurrentUser$: Observable<boolean> = combineLatest([
    this.userData$,
    this.authUserService.data$,
  ]).pipe(
    map(([user, authUser]) => Boolean(authUser) && (user?.id === authUser?.id))
  );

  public showCreateLink$: Observable<boolean> = this.isCurrentUser$;

  private querySbs = this
    .route
    .queryParams
    .pipe(skip(1))
    .subscribe(query => {
      const formValue = this.routeHandlerSerivce.routeQueryToFormValue(query);
      this.playlistsFormDataService.fillForm(formValue);
      this.playlistsFormDataService.update().subscribe();
    });

  public items$ = this.playlistsListDataService.items$;

  public pagination$ = this.playlistsListDataService.pagination$;

  public showPlaceholder$: Observable<boolean> = this.items$.pipe(map(items => items.length === 0));

  public ngOnDestroy(): void {
    this.querySbs.unsubscribe();
  }

  private updateRoute(): void {
    const formValue = this.playlistsFormDataService.form.value;
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
    const pageControl = this.playlistsFormDataService.form.get('page');

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
