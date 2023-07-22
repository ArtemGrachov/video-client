import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteLocalizationPipe } from './pipes/route-localization.pipe';

@NgModule({
  declarations: [
    RouteLocalizationPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    RouteLocalizationPipe,
  ],
})
export class SharedModule { }
