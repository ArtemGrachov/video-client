import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleModalComponent } from '@looorent/ngx-simple-modal';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { EStatus } from 'src/app/constants/status';

import { LoginDataService } from 'src/app/modules/data/login-data/services/login-data.service';
import { ViewRegistrationModalService } from '../view-registration/services/view-registration-modal.service';

import { ILoginRequestPayload } from 'src/app/types/api/auth-api.interface';
import { ViewResetPasswordRequestModalService } from '../view-reset-password-request/services/view-reset-password-request-modal.service';

@Component({
  selector: 'app-view-login',
  templateUrl: './view-login.component.html',
  styleUrls: ['./view-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewLoginComponent extends SimpleModalComponent<{ redirectTo?: string | null }, void> {
  constructor(
    private loginDataService: LoginDataService,
    private viewRegistrationModalService: ViewRegistrationModalService,
    private viewResetPasswordRequestModalService: ViewResetPasswordRequestModalService,
    private toastr: ToastrService,
    private router: Router,
  ) {
    super();
  }

  public redirectTo?: string | null;

  public loginStatus$: Observable<EStatus> = this.loginDataService.loginStatus$;

  public loginError$: Observable<any> = this.loginDataService.loginError$;

  public submitHandler(formValue: ILoginRequestPayload): void {
    this
      .loginDataService
      .login(formValue)
      .subscribe({
        next: () => {
          this.close();

          if (this.redirectTo) {
            this.router.navigateByUrl(this.redirectTo);
          }
        },
        error: () => this.toastr.error('Login error')
      });
  }

  public registrationHandler(): void {
    this.viewRegistrationModalService.showModal();
    this.close();
  }

  public resetPasswordRequestHandler(): void {
    this.viewResetPasswordRequestModalService.showModal();
    this.close();
  }
}
