import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, combineLatest, map } from 'rxjs';

import { AuthService } from 'src/app/services/auth/auth.service';
import { ModalMenuService } from '../../modals/modal-menu/services/modal-menu.service';

import { ViewLoginModalService } from 'src/app/views/view-login/services/view-login-modal.service';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(
    private viewLoginModalService: ViewLoginModalService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private modalMenuService: ModalMenuService,
  ) {}

  public isAuthorized$: Observable<boolean> = this.authService.isAuthorizedFlag$;

  public isGuest$: Observable<boolean> = this.authService.isAuthorizedFlag$.pipe(map(v => !v));

  public searchQuery$: Observable<string | null> = combineLatest([
    this.route.queryParams,
    this.route.url,
  ])
  .pipe(
    map(([{ search }, url]) => {
      if (url.length === 1 && url[0].path === '') {
        return search ?? null
      }

      return null
    })
  );

  public get allowVideoCreate(): boolean {
    return this.authService.isAuthorized;
  }

  public get isGuest(): boolean {
    return !this.authService.isAuthorized;
  }

  public openAuthModal(): void {
    this.viewLoginModalService.showModal();
  }

  public searchHandler(search: string): void {
    let path = [''];

    switch ((this.route.snapshot.firstChild?.url ?? [])[0]?.path) {
      case 'users': {
        path = ['/', 'users'];
        break;
      }
      case 'playlists': {
        path = ['/', 'playlists'];
        break;
      }
    }

    this.router.navigate(path, { queryParams: { search: search || undefined } });
  }

  public openMenuHandler(): void {
    this.modalMenuService.showModal();
  }
}
