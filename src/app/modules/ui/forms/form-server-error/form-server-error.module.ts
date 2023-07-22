import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { FormValidationModule } from 'src/app/modules/utils/form-validation/form-validation.module';

import { FormServerErrorComponent } from './form-server-error.component';

@NgModule({
  declarations: [
    FormServerErrorComponent
  ],
  imports: [
    SharedModule,
    FormValidationModule,
  ],
  exports: [
    FormServerErrorComponent
  ]
})
export class FormServerErrorModule { }
