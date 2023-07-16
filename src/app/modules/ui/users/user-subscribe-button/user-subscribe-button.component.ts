import { ChangeDetectionStrategy, Component, Input, OnChanges, Optional, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { L10nTranslationService } from 'angular-l10n';

import { EStatus } from 'src/app/constants/status';
import { ViewLoginModalService } from 'src/app/views/view-login/services/view-login-modal.service';

import { AuthService } from 'src/app/services/auth/auth.service';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

import { IUser } from 'src/app/types/models/user.interface';

@Component({
  selector: 'app-user-subscribe-button',
  templateUrl: './user-subscribe-button.component.html',
  styleUrls: ['./user-subscribe-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSubscribeButtonComponent implements OnChanges {
  @Input()
  public user!: IUser;

  private user$: BehaviorSubject<IUser> = new BehaviorSubject(this.user);

  constructor(
    private viewLoginModalService: ViewLoginModalService,
    private authService: AuthService,
    private toastrService: ToastrService,
    @Optional() private userDataService: UserDataService | null,
    private translationService: L10nTranslationService,
  ) {}

  public get isSubscription(): boolean {
    return Boolean(this.user?.isSubscription);
  }

  public get subscribeProcessing(): boolean {
    return this.user?.subscribeStatus === EStatus.PROCESSING;
  }

  public subscribeLabel$: Observable<string> = combineLatest([
    this.user$,
    this.translationService.onChange(),
  ])
    .pipe(
      map(() => {
        if (this.isSubscription) {
          return this.translationService.translate('user_subscribe_button.unsubscribe');
        }

        return this.translationService.translate('user_subscribe_button.subscribe');
      })
    )

  public ngOnChanges(changes: SimpleChanges): void {
    const newUser = changes['user'];

    if (newUser) {
      this.user$.next(newUser.currentValue);
    }
  }

  public subscribeHandler(): void {
    if (!this.userDataService || this.subscribeProcessing) {
      return;
    }

    if (!this.authService.isAuthorized) {
      this.viewLoginModalService.showModal();
      return;
    }

    this.userDataService
      .updateSubscription(!this.isSubscription)
      .subscribe({
        error: () => this.toastrService.error(
          this.translationService.translate('user_subscribe_button.subscripiton_error'),
        ),
      });
  }
}
