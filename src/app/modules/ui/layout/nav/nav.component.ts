import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Observable, filter, map } from 'rxjs';

import { AUTH_USER_SERVICE } from 'src/app/tokens/auth';

import { AuthService } from 'src/app/services/auth/auth.service';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { IsActiveMatchOptions } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  public readonly routerLinkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'ignored',
    queryParams: 'ignored',
    fragment: 'ignored',
    paths: 'exact'
  };

  constructor(
    private authService: AuthService,
    @Inject(AUTH_USER_SERVICE) private authUserService: UserDataService,
  ) { }

  public isAuthorized$: Observable<boolean> = this.authService.isAuthorizedFlag$;

  public showUserLists$: Observable<boolean> = this.isAuthorized$;

  public userPageLink$: Observable<Array<string | number>> = this
    .authUserService
    .data$
    .pipe(
      filter(user => Boolean(user)),
      map(user => ['/', 'users', user!.id]),
    );

  public userPlaylistsLink$: Observable<Array<string | number>> = this
    .authUserService
    .data$
    .pipe(
      filter(user => Boolean(user)),
      map(user => ['/', 'users', user!.id, 'playlists']),
    );

  public userSubscriptionsLink$: Observable<Array<string | number>> = this
    .authUserService
    .data$
    .pipe(
      filter(user => Boolean(user)),
      map(user => ['/', 'users', user!.id, 'subscriptions']),
    );

  public userSubscribersLink$: Observable<Array<string | number>> = this
    .authUserService
    .data$
    .pipe(
      filter(user => Boolean(user)),
      map(user => ['/', 'users', user!.id, 'subscribers']),
    );
}
