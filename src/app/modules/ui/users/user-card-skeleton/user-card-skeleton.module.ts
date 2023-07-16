import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCardSkeletonComponent } from './user-card-skeleton.component';

@NgModule({
  declarations: [
    UserCardSkeletonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserCardSkeletonComponent
  ],
})
export class UserCardSkeletonModule { }
