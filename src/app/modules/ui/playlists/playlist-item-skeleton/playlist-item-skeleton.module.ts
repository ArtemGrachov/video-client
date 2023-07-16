import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistItemSkeletonComponent } from './playlist-item-skeleton.component';

@NgModule({
  declarations: [
    PlaylistItemSkeletonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlaylistItemSkeletonComponent,
  ],
})
export class PlaylistItemSkeletonModule { }
