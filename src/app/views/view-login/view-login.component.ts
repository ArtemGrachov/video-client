import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SimpleModalComponent } from '@looorent/ngx-simple-modal';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { EStatus } from 'src/app/constants/status';

import { LoginDataService } from 'src/app/modules/data/login-data/services/login-data.service';
import { ViewRegistrationModalService } from '../view-registration/services/view-registration-modal.service';

import { ILoginRequestPayload } from 'src/app/types/api/auth-api.interface';

@Component({
  selector: 'app-view-login',
  templateUrl: './view-login.component.html',
  styleUrls: ['./view-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewLoginComponent extends SimpleModalComponent<void, void> {
  constructor(
    private loginDataService: LoginDataService,
    private viewRegistrationModalService: ViewRegistrationModalService,
    private toastr: ToastrService,
  ) {
    super();
  }

  public loginStatus$: Observable<EStatus> = this.loginDataService.loginStatus$;

  public loginError$: Observable<any> = this.loginDataService.loginError$;

  public submitHandler(formValue: ILoginRequestPayload): void {
    this
      .loginDataService
      .login(formValue)
      .subscribe({
        next: () => this.close(),
        error: () => this.toastr.error('Login error')
      });
  }

  public registrationHandler(): void {
    this.viewRegistrationModalService.showModal();
    this.close();
  }
}
