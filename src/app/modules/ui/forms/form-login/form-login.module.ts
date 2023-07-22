import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { FormServerErrorModule } from '../form-server-error/form-server-error.module';
import { FormControlModule } from '../form-control/form-control.module';
import { FormLoginComponent } from './form-login.component';

@NgModule({
  declarations: [
    FormLoginComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormControlModule,
    FormServerErrorModule,
    L10nTranslationModule,
  ],
  exports: [
    FormLoginComponent
  ]
})
export class FormLoginModule { }
