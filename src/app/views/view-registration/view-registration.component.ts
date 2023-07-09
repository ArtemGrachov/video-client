import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SimpleModalComponent } from '@looorent/ngx-simple-modal';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { EStatus } from 'src/app/constants/status';

import { ViewLoginModalService } from '../view-login/services/view-login-modal.service';
import { RegistrationDataService } from 'src/app/services/registration-data/registration-data.service';

import { IRegistrationRequestPayload } from 'src/app/types/api/auth-api.interface';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewRegistrationComponent extends SimpleModalComponent<void, void> {
  constructor(
    private registrationDataService: RegistrationDataService,
    private viewLoginModalService: ViewLoginModalService,
    private toastr: ToastrService,
  ) {
    super();
  }

  public registrationStatus$: Observable<EStatus> = this.registrationDataService.registrationStatus$;

  public registrationError$: Observable<any> = this.registrationDataService.registrationError$;

  public submitHandler(formValue: IRegistrationRequestPayload): void {
    this
      .registrationDataService
      .registration(formValue)
      .subscribe({
        next: () => {
          this.toastr.success('Account registered successfully');
          this.loginHandler();
        },
        error: () => this.toastr.error('Registration error'),
      });
  }

  public loginHandler(): void {
    this.viewLoginModalService.showModal();
    this.close();
  }
}
