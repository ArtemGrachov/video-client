import { NgModule } from '@angular/core';

import { ModalModule } from '../../ui/modal/modal.module';
import { ViewRegistrationModule } from 'src/app/views/view-registration/view-registration.module';
import { ViewLoginModule } from 'src/app/views/view-login/view-login.module';
import { ViewResetPasswordRequestModule } from 'src/app/views/view-reset-password-request/view-reset-password-request.module';

@NgModule({
  declarations: [],
  imports: [
    ModalModule,
    ViewRegistrationModule,
    ViewLoginModule,
    ViewResetPasswordRequestModule,
  ]
})
export class ModalsModule { }
