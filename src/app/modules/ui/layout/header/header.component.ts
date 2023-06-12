import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AuthService } from 'src/app/modules/data/auth/services/auth.service';
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
  ) {}

  public get allowVideoCreate(): boolean {
    return this.authService.isAuthorized;
  }

  public openAuthModal(): void {
    this.viewLoginModalService.showModal();
  }
}
