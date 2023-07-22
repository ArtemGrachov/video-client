import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { FormValidationModule } from 'src/app/modules/utils/form-validation/form-validation.module';

import { ControlServerErrorComponent } from './control-server-error.component';

@NgModule({
  declarations: [
    ControlServerErrorComponent
  ],
  imports: [
    SharedModule,
    FormValidationModule,
  ],
  exports: [
    ControlServerErrorComponent
  ]
})
export class ControlServerErrorModule { }
