import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map } from 'rxjs';
import { L10nTranslationService } from 'angular-l10n';

import { EStatus } from 'src/app/constants/status';

import { ViewLoginModalService } from '../view-login/services/view-login-modal.service';
import { ResetPasswordDataService } from 'src/app/services/reset-password-data/reset-password-data.service';

import { IFormResetPasswordValue } from 'src/app/types/forms/form-reset-password.interface';
import { IResetPasswordPayload } from 'src/app/types/api/auth-api.interface';

@Component({
  selector: 'app-view-reset-password',
  templateUrl: './view-reset-password.component.html',
  styleUrls: ['./view-reset-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewResetPasswordComponent {
  constructor(
    private resetPasswordDataService: ResetPasswordDataService,
    private viewLoginModalService: ViewLoginModalService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private translationService: L10nTranslationService,
  ) {}

  public resetPasswordStatus$: Observable<EStatus> = this.resetPasswordDataService.resetPasswordStatus$;

  public resetPasswordError$: Observable<any> = this.resetPasswordDataService.resetPasswordError$;

  public submitHandler(formValue: IFormResetPasswordValue): void {
    const payload: IResetPasswordPayload = {
      ...formValue,
      resetPasswordToken: this.route.snapshot.params['token'],
    };

    this
      .resetPasswordDataService
      .resetPassword(payload)
      .subscribe({
        next: () => this.toastr.success(
          this.translationService.translate('view_reset_password.reset_success'),
        ),
        error: () => this.toastr.error(
          this.translationService.translate('view_reset_password.reset_error'),
        ),
      });
  }

  public showSuccessMessage$: Observable<boolean> = this
    .resetPasswordStatus$
    .pipe(map(status => status === EStatus.SUCCESS));

  public loginHandler(): void {
    this.viewLoginModalService.showModal();
    this.router.navigate(['/']);
  }
}
