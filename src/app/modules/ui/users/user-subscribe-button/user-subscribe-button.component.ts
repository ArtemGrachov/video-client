import { ChangeDetectionStrategy, Component, Input, Optional } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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
export class UserSubscribeButtonComponent {
  @Input()
  public user!: IUser;

  constructor(
    private viewLoginModalService: ViewLoginModalService,
    private authService: AuthService,
    private toastrService: ToastrService,
    @Optional() private userDataService: UserDataService | null,
  ) {}

  public get subscribeLabel(): string {
    if (this.isSubscription) {
      return 'Unsubscribe';
    }

    return 'Subscribe';
  }

  public get isSubscription(): boolean {
    return Boolean(this.user?.isSubscription);
  }

  public get subscribeProcessing(): boolean {
    return this.user?.subscribeStatus === EStatus.PROCESSING;
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
        error: () => this.toastrService.error('Subscription update error'),
      });
  }
}
