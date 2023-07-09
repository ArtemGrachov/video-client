import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { EStatus } from 'src/app/constants/status';

import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { UserFormDataService } from 'src/app/services/user-form-data/user-form-data.service';

import { IUpdateUserPayload } from 'src/app/types/api/users-api.interface';
import { IUser } from 'src/app/types/models/user.interface';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileEditComponent {
  constructor(
    private userFormDataService: UserFormDataService,
    private userDataService: UserDataService,
    private toastr: ToastrService,
  ) {}

  public user$: Observable<IUser> = this.userDataService.data$ as Observable<IUser>;

  public submitStatus$: Observable<EStatus> = this.userFormDataService.submitStatus$;

  public submitError$: Observable<any> = this.userFormDataService.submitError$;

  public submitHandler(formValue: IUpdateUserPayload): void {
    this
      .userFormDataService
      .updateProfile(formValue)
      .subscribe({
        next: () => this.toastr.success('Profile created successfully'),
        error: () => this.toastr.error('Profile update error')
      });
  }
}
