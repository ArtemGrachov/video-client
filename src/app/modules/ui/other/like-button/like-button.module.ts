import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LikeButtonComponent } from './components/like-button/like-button.component';

@NgModule({
  declarations: [
    LikeButtonComponent
  ],
  exports: [
    LikeButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LikeButtonModule { }
