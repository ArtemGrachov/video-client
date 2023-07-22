import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { FormControlModule } from '../form-control/form-control.module';
import { FormServerErrorModule } from '../form-server-error/form-server-error.module';

import { FormCommentComponent } from './form-comment.component';

@NgModule({
  declarations: [
    FormCommentComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormControlModule,
    FormServerErrorModule,
    L10nTranslationModule,
  ],
  exports: [
    FormCommentComponent,
  ]
})
export class FormCommentModule { }
