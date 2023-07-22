import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';

import { LogoComponent } from './logo.component';

@NgModule({
  declarations: [
    LogoComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    LogoComponent
  ],
})
export class LogoModule { }
