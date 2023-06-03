import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerValidationService } from './services/server-validation.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ServerValidationService
  ]
})
export class FormValidationModule { }
