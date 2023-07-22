import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';

import { ServerValidationService } from './services/server-validation.service';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
  ],
  providers: [
    ServerValidationService
  ]
})
export class FormValidationModule { }
