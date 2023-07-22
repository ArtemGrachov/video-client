import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { LocaleSwitchComponent } from './locale-switch.component';

@NgModule({
  declarations: [
    LocaleSwitchComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
  ],
  exports: [
    LocaleSwitchComponent,
  ],
})
export class LocaleSwitchModule { }
