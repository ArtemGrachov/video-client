import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { FormRegistrationComponent } from './form-registration.component';
import { FormControlModule } from '../form-control/form-control.module';
import { FormServerErrorModule } from '../form-server-error/form-server-error.module';

@NgModule({
  declarations: [
    FormRegistrationComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormControlModule,
    FormServerErrorModule,
    L10nTranslationModule,
  ],
  exports: [
    FormRegistrationComponent
  ]
})
export class FormRegistrationModule { }
