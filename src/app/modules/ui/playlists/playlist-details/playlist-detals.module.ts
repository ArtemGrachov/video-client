import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserBlockModule } from '../../users/user-block/user-block.module';

import { PlaylistDetailsComponent } from './components/playlist-details/playlist-details.component';

@NgModule({
  declarations: [
    PlaylistDetailsComponent,
  ],
  imports: [
    CommonModule,
    UserBlockModule,
  ],
  exports: [
    PlaylistDetailsComponent,
  ],
})
export class PlaylistDetalsModule { }
