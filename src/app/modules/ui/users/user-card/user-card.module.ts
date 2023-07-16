import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L10nTranslationModule } from 'angular-l10n';

import { AvatarModule } from '../../other/avatar/avatar.module';

import { UserCardComponent } from './components/user-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UserCardComponent,
  ],
  imports: [
    CommonModule,
    AvatarModule,
    RouterModule,
    L10nTranslationModule,
  ],
  exports: [
    UserCardComponent,
  ],
})
export class UserCardModule { }
