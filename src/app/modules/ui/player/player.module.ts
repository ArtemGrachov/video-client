import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';

import { PlayerComponent } from './components/player/player.component';

@NgModule({
  declarations: [
    PlayerComponent
  ],
  exports: [
    PlayerComponent
  ],
  imports: [
    SharedModule,
  ],
})
export class PlayerModule { }
