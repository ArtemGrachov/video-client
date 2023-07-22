import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { ControlClientErrorModule } from '../control-client-error/control-client-error.module';
import { ControlServerErrorModule } from '../control-server-error/control-server-error.module';

import { FormControlComponent } from './form-control.component';

@NgModule({
  declarations: [
    FormControlComponent
  ],
  imports: [
    SharedModule,
    ControlClientErrorModule,
    ControlServerErrorModule,
  ],
  exports: [
    FormControlComponent
  ]
})
export class FormControlModule { }
