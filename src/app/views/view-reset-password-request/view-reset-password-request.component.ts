import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SimpleModalComponent } from '@looorent/ngx-simple-modal';
import { ToastrService } from 'ngx-toastr';
import { Observable, map } from 'rxjs';

import { EStatus } from 'src/app/constants/status';

import { ResetPasswordRequestDataService } from 'src/app/modules/data/reset-password-request-data/services/reset-password-request-data.service';
import { ViewLoginModalService } from '../view-login/services/view-login-modal.service';

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
          this.toastr.success('Pasword reset request sent successfully');
        },
        error: () => this.toastr.error('Password reset request error'),
      });
  }

  public loginHandler(): void {
    this.viewLoginModalService.showModal();
    this.close();
  }
}
