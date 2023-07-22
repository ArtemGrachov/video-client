import { NgModule } from '@angular/core';
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { AvatarModule } from '../../other/avatar/avatar.module';

import { UserCardComponent } from './components/user-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UserCardComponent,
  ],
  imports: [
    SharedModule,
    AvatarModule,
    RouterModule,
    L10nTranslationModule,
  ],
  exports: [
    UserCardComponent,
  ],
})
export class UserCardModule { }
