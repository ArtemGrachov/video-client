import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SimpleModalComponent } from '@looorent/ngx-simple-modal';

import { ViewLoginModalService } from '../view-login/services/view-login-modal.service';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewRegistrationComponent extends SimpleModalComponent<void, void> {
  constructor(private viewLoginModalService: ViewLoginModalService) {
    super();
  }

  public loginHandler(): void {
    this.viewLoginModalService.showModal();
    this.close();
  }
}
