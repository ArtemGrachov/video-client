import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';

import { PlaylistItemSkeletonComponent } from './playlist-item-skeleton.component';

@NgModule({
  declarations: [
    PlaylistItemSkeletonComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    PlaylistItemSkeletonComponent,
  ],
})
export class PlaylistItemSkeletonModule { }
