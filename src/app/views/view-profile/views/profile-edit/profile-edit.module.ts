import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormProfileModule } from 'src/app/modules/ui/forms/form-profile/form-profile.module';
import { UserFormDataService } from 'src/app/services/user-form-data/user-form-data.service';

import { ProfileEditRoutingModule } from './profile-edit-routing.module';
import { ProfileEditComponent } from './profile-edit.component';

@NgModule({
  declarations: [
    ProfileEditComponent,
  ],
  imports: [
    CommonModule,
    ProfileEditRoutingModule,
    FormProfileModule,
  ],
  providers: [
    UserFormDataService,
  ],
})
export class ProfileEditModule { }
