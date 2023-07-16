import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';
import { Observable, combineLatest, map } from 'rxjs';

import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { AUTH_USER_SERVICE } from 'src/app/tokens/auth';

import { IUser } from 'src/app/types/models/user.interface';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewUserComponent {
  public readonly routerLinkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'ignored',
    queryParams: 'ignored',
    fragment: 'ignored',
    paths: 'exact'
  };

  constructor(
    private userDataService: UserDataService,
    @Inject(AUTH_USER_SERVICE) private authUserService: UserDataService,
  ) {}

  public userData$: Observable<IUser | null> = this.userDataService.data$;

  public showSubscribeButton$: Observable<boolean> = combineLatest([
    this.userData$,
    this.authUserService.data$,
  ]).pipe(
    map(([user, authUser]) => Boolean(authUser) && (user?.id !== authUser?.id))
  );

  public get videosLink(): string[] {
    return [
      '/',
      'users',
      this.userDataService.dataSnapshot!.id.toString(),
    ];
  }

  public get playlistsLink(): string[] {
    return [
      '/',
      'users',
      this.userDataService.dataSnapshot!.id.toString(),
      'playlists'
    ];
  }

  public get subscriptionsLink(): string[] {
    return [
      '/',
      'users',
      this.userDataService.dataSnapshot!.id.toString(),
      'subscriptions'
    ];
  }

  public get subscribersLink(): string[] {
    return [
      '/',
      'users',
      this.userDataService.dataSnapshot!.id.toString(),
      'subscribers'
    ];
  }
}
