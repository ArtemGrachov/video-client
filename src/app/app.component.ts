import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Route, Router } from '@angular/router';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { EMPTY, Observable, Subscription, filter, interval, map, mergeMap, of, skip, skipUntil, switchMap, take, takeUntil, tap, timer } from 'rxjs';

import { ErrorHandlerService } from './modules/main/core/services/error-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private errorHandlerService: ErrorHandlerService,
    private router: Router,
  ) { }

  public error$: Observable<any> = this.errorHandlerService.error$;

  public showError$: Observable<boolean> = this.error$.pipe(map(error => Boolean(error)));

  public showRoute$: Observable<boolean> = this.error$.pipe(map(error => !Boolean(error)));

  private errorClearSub: Subscription | null = isPlatformBrowser(this.platformId)
    ? this.error$.pipe(
      filter(err => Boolean(err)),
      mergeMap(() => {
        return this.router.events.pipe(
          filter(event => event instanceof NavigationEnd),
          skip(1),
          take(1),
          tap(() => {
            this.errorHandlerService.setError(null);
          })
        );
      })
    ).subscribe()
    : null

  public ngOnDestroy(): void {
    this.errorClearSub && this.errorClearSub.unsubscribe();
  }
}
