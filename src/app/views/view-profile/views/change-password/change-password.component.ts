import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { EStatus } from 'src/app/constants/status';

import { ChangePasswordDataService } from 'src/app/modules/data/change-password-data/services/change-password-data.service';
import { IChangePasswordPayload } from 'src/app/types/api/auth-api.interface';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangePasswordComponent {
  constructor(
    private changePasswordDataService: ChangePasswordDataService,
    private toastr: ToastrService,
  ) {}

  public submitStatus$: Observable<EStatus> = this.changePasswordDataService.submitStatus$;

  public submitError$: Observable<any> = this.changePasswordDataService.submitError$;

  public submitHandler(formValue: IChangePasswordPayload): void {
    this
      .changePasswordDataService
      .changePassword(formValue)
      .subscribe({
        next: () => this.toastr.success('Password updated successfully'),
        error: () => this.toastr.error('Password update error')
      });
  }
}
