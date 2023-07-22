import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { ControlClientErrorComponent } from './control-client-error.component';

@NgModule({
  declarations: [
    ControlClientErrorComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    ControlClientErrorComponent
  ]
})
export class ControlClientErrorModule { }
