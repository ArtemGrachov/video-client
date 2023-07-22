import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { InputVideoModule } from '../../inputs/input-video/input-video.module';
import { FormControlModule } from '../form-control/form-control.module';
import { FormServerErrorModule } from '../form-server-error/form-server-error.module';

import { FormVideoComponent } from './form-video.component';

@NgModule({
  declarations: [
    FormVideoComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormControlModule,
    FormServerErrorModule,
    InputVideoModule,
    L10nTranslationModule,
  ],
  exports: [
    FormVideoComponent,
  ],
})
export class FormVideoModule { }
