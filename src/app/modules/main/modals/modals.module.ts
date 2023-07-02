import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from '../../ui/modal/modal.module';
import { ViewRegistrationModule } from 'src/app/views/view-registration/view-registration.module';
import { ViewLoginModule } from 'src/app/views/view-login/view-login.module';
import { ViewResetPasswordRequestModule } from 'src/app/views/view-reset-password-request/view-reset-password-request.module';
import { ViewPlaylistAddVideoModule } from 'src/app/views/view-playlist-add-video/view-playlist-add-video.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModalModule,
    ViewRegistrationModule,
    ViewLoginModule,
    ViewResetPasswordRequestModule,
  ]
})
export class ModalsModule { }
