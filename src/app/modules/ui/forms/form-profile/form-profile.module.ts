import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { L10nTranslationModule } from 'angular-l10n';

import { ImagesModule } from 'src/app/modules/utils/images/images.module';
import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { FormControlModule } from '../form-control/form-control.module';
import { FormServerErrorModule } from '../form-server-error/form-server-error.module';
import { InputImageModule } from '../../inputs/input-image/input-image.module';

import { FormProfileComponent } from './form-profile.component';

@NgModule({
  declarations: [
    FormProfileComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormControlModule,
    FormServerErrorModule,
    InputImageModule,
    L10nTranslationModule,
    ImagesModule,
  ],
  exports: [
    FormProfileComponent,
  ],
})
export class FormProfileModule { }
