import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, combineLatest, map, skip } from 'rxjs';

import { AUTH_USER_SERVICE } from 'src/app/tokens/auth';

import { RouteHandlerService } from './services/route-handler.service';
import { VideoListFormService } from 'src/app/services/video-list-form/video-list-form.service';
import { VideoListDataService } from 'src/app/services/video-list-data/video-list-data.service';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

import { IGetVideosQuery } from 'src/app/types/api/video-api.interface';
import { IUser } from 'src/app/types/models/user.interface';

@Component({
  selector: 'app-view-user-videos',
  templateUrl: './view-user-videos.component.html',
  styleUrls: ['./view-user-videos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewUserVideosComponent {
  constructor(
    private userDataService: UserDataService,
    @Inject(AUTH_USER_SERVICE) private authUserService: UserDataService,
    private router: Router,
    private route: ActivatedRoute,
    private routeHandlerSerivce: RouteHandlerService,
    private videoListDataService: VideoListDataService,
    private videoListFormService: VideoListFormService,
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
      this.videoListFormService.fillForm(formValue);
      this
        .videoListFormService
        .update({
          userIds: [this.route.snapshot.params['id']]
        } as IGetVideosQuery)
        .subscribe();
    });

  public items$ = this.videoListDataService.items$;

  public pagination$ = this.videoListDataService.pagination$;

  public showPlaceholder$: Observable<boolean> = this.items$.pipe(map(items => items.length === 0));

  public processing$: Observable<boolean> = this.videoListDataService.processing$;

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
