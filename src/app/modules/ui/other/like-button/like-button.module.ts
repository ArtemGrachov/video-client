import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';

import { LikeButtonComponent } from './components/like-button/like-button.component';

@NgModule({
  declarations: [
    LikeButtonComponent
  ],
  exports: [
    LikeButtonComponent
  ],
  imports: [
    SharedModule,
  ],
})
export class LikeButtonModule { }
