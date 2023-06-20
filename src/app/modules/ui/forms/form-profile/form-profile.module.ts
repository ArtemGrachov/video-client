import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormControlModule } from '../form-control/form-control.module';
import { FormServerErrorModule } from '../form-server-error/form-server-error.module';
import { InputImageModule } from '../../inputs/input-image/input-image.module';

import { FormProfileComponent } from './form-profile.component';

@NgModule({
  declarations: [
    FormProfileComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormControlModule,
    FormServerErrorModule,
    InputImageModule,
  ],
  exports: [
    FormProfileComponent,
  ],
})
export class FormProfileModule { }
