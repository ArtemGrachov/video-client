import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerComponent } from './components/player/player.component';

@NgModule({
  declarations: [
    PlayerComponent
  ],
  exports: [
    PlayerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlayerModule { }
