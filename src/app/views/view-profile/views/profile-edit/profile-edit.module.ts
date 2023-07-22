import { NgModule } from '@angular/core';
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { FormProfileModule } from 'src/app/modules/ui/forms/form-profile/form-profile.module';
import { UserFormDataService } from 'src/app/services/user-form-data/user-form-data.service';

import { ProfileEditRoutingModule } from './profile-edit-routing.module';
import { ProfileEditComponent } from './profile-edit.component';

@NgModule({
  declarations: [
    ProfileEditComponent,
  ],
  imports: [
    SharedModule,
    ProfileEditRoutingModule,
    FormProfileModule,
    L10nTranslationModule,
  ],
  providers: [
    UserFormDataService,
  ],
})
export class ProfileEditModule { }
