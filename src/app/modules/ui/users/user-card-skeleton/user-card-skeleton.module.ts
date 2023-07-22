import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { UserCardSkeletonComponent } from './user-card-skeleton.component';

@NgModule({
  declarations: [
    UserCardSkeletonComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    UserCardSkeletonComponent
  ],
})
export class UserCardSkeletonModule { }
