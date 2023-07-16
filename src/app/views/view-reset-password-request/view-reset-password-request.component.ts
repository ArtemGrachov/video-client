import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SimpleModalComponent } from '@looorent/ngx-simple-modal';
import { ToastrService } from 'ngx-toastr';
import { Observable, map } from 'rxjs';
import { L10nTranslationService } from 'angular-l10n';

import { EStatus } from 'src/app/constants/status';

import { ViewLoginModalService } from '../view-login/services/view-login-modal.service';
import { ResetPasswordRequestDataService } from 'src/app/services/reset-password-request-data/reset-password-request-data.service';

import { IResetPasswordRequestPayload } from 'src/app/types/api/auth-api.interface';

@Component({
  selector: 'app-view-reset-password-request',
  templateUrl: './view-reset-password-request.component.html',
  styleUrls: ['./view-reset-password-request.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewResetPasswordRequestComponent extends SimpleModalComponent<void, void> {
  constructor(
    private resetPasswordRequestDataService: ResetPasswordRequestDataService,
    private viewLoginModalService: ViewLoginModalService,
    private toastr: ToastrService,
    private translationService: L10nTranslationService,
    ) {
    super();
  }

  public email: string = '';

  public requestStatus$: Observable<EStatus> = this.resetPasswordRequestDataService.requestStatus$;

  public requestError$: Observable<any> = this.resetPasswordRequestDataService.requestError$;

  public showSuccessMessage$: Observable<boolean> = this
    .requestStatus$
    .pipe(map(status => status === EStatus.SUCCESS));

  public submitHandler(formValue: IResetPasswordRequestPayload): void {
    this.email = formValue.email;

    this
      .resetPasswordRequestDataService
      .resetPasswordRequest(formValue)
      .subscribe({
        next: () => {
          this.toastr.success(
            this.translationService.translate('view_reset_password_request.reset_success'),
          );
        },
        error: () => this.toastr.error(
          this.translationService.translate('view_reset_password_request.reset_error'),
        ),
      });
  }

  public loginHandler(): void {
    this.viewLoginModalService.showModal();
    this.close();
  }
}
