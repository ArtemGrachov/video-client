import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';

import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';

@NgModule({
  declarations: [
    ThumbnailComponent
  ],
  exports: [
    ThumbnailComponent
  ],
  imports: [
    SharedModule,
  ],
})
export class ThumbnailModule { }
