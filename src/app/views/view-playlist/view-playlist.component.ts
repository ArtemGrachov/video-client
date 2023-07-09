import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, map, skip, switchMap, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { ModalConfirmationService } from 'src/app/modules/ui/modals/modal-confirmation/services/modal-confirmation.service';
import { RouteHandlerService } from './services/route-handler.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { VideoListDataService } from 'src/app/services/video-list-data/video-list-data.service';
import { VideoListFormService } from 'src/app/services/video-list-form/video-list-form.service';
import { PlaylistDataService } from 'src/app/services/playlist-data/playlist-data.service';

@Component({
  selector: 'app-view-playlist',
  templateUrl: './view-playlist.component.html',
  styleUrls: ['./view-playlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewPlaylistComponent {
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private routeHandlerSerivce: RouteHandlerService,
    private videoListDataService: VideoListDataService,
    private videoListFormService: VideoListFormService,
    private playlistDataService: PlaylistDataService,
    private modalConfirmationService: ModalConfirmationService,
  ) {}

  public get playlistId(): number {
    return +this.route.snapshot.params['id'];
  }

  private querySbs = this
    .route
    .queryParams
    .pipe(skip(1))
    .subscribe(query => {
      const formValue = this.routeHandlerSerivce.routeQueryToFormValue(query);
      this.videoListFormService.setValue(formValue);
      this.videoListFormService.updatePlaylist(this.playlistId).subscribe();
    });

  public items$ = this.videoListDataService.items$;

  public pagination$ = this.videoListDataService.pagination$;

  public playlist$ = this.playlistDataService.data$;

  public userIsAuthor$: Observable<boolean> = this
    .playlist$
    .pipe(map(playlist => playlist!.authorId === this.authService.userDataSnapshot?.id));

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
  public deleteHandler(): void {
    this.modalConfirmationService.showModal({
      title: 'Confirm deleting',
      question: 'Are you sure you want to delete this video?'
    })
    .pipe(
      switchMap(result => {
        if (!result) {
          return EMPTY;
        }

        return this
          .playlistDataService
          .deletePlaylist()
          .pipe(
            tap({
              next: () => {
                this.toastr.success('Playlist deleted successfully');
                this.router.navigate(['/', 'playlists']);
              },
              error: () => this.toastr.error('Playlist deleting error'),
            })
          )
      })
    )
    .subscribe();
  }
}
