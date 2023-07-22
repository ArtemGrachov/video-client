import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';

import { PlaceholderComponent } from './placeholder.component';

@NgModule({
  declarations: [
    PlaceholderComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    PlaceholderComponent,
  ],
})
export class PlaceholderModule { }
