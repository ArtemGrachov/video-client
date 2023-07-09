import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RouteHandlerService } from './services/route-handler.service';

import { PlaylistsListDataService } from 'src/app/modules/data/playlists-list-data/services/playlists-list-data.service';
import { PlaylistsFormDataService } from 'src/app/modules/data/playlists-form-data/services/playlists-form-data.service';
import { skip } from 'rxjs';

@Component({
  selector: 'app-view-user-playlists',
  templateUrl: './view-user-playlists.component.html',
  styleUrls: ['./view-user-playlists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewUserPlaylistsComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private routeHandlerSerivce: RouteHandlerService,
    private playlistsListDataService: PlaylistsListDataService,
    private playlistsFormDataService: PlaylistsFormDataService,
  ) {}

  private querySbs = this
    .route
    .queryParams
    .pipe(skip(1))
    .subscribe(query => {
      const formValue = this.routeHandlerSerivce.routeQueryToFormValue(query);
      this.playlistsFormDataService.setValue(formValue);
      this.playlistsFormDataService.update().subscribe();
    });

  public items$ = this.playlistsListDataService.items$;

  public pagination$ = this.playlistsListDataService.pagination$;

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
