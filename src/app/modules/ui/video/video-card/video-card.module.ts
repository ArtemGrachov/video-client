import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { ThumbnailModule } from '../../other/thumbnail/thumbnail.module';
import { ModalConfirmationModule } from '../../modals/modal-confirmation/modal-confirmation.module';
import { AvatarModule } from '../../other/avatar/avatar.module';
import { VideoCardComponent } from './components/video-card/video-card.component';

@NgModule({
  declarations: [
    VideoCardComponent,
  ],
  imports: [
    SharedModule,
    ThumbnailModule,
    AvatarModule,
    RouterModule,
    ModalConfirmationModule,
  ],
  exports: [
    VideoCardComponent,
  ],
})
export class VideoCardModule { }
