import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { UserBlockModule } from '../../users/user-block/user-block.module';

import { PlaylistDetailsComponent } from './components/playlist-details/playlist-details.component';

@NgModule({
  declarations: [
    PlaylistDetailsComponent,
  ],
  imports: [
    SharedModule,
    UserBlockModule,
  ],
  exports: [
    PlaylistDetailsComponent,
  ],
})
export class PlaylistDetalsModule { }
