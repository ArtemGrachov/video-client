import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SimpleModalComponent } from '@looorent/ngx-simple-modal';

import { AuthService } from 'src/app/modules/data/auth/services/auth.service';

import { ILoginRequestPayload } from 'src/app/types/api/auth-api.interface';

@Component({
  selector: 'app-view-login',
  templateUrl: './view-login.component.html',
  styleUrls: ['./view-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewLoginComponent extends SimpleModalComponent<void, void> {
  constructor(private authService: AuthService) {
    super();
  }

  public submitHandler(formValue: ILoginRequestPayload): void {
    this.authService.login(formValue).subscribe();
  }
}
