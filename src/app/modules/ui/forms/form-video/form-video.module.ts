import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputVideoModule } from '../../inputs/input-video/input-video.module';
import { FormControlModule } from '../form-control/form-control.module';
import { FormServerErrorModule } from '../form-server-error/form-server-error.module';

import { FormVideoComponent } from './form-video.component';

@NgModule({
  declarations: [
    FormVideoComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormControlModule,
    FormServerErrorModule,
    InputVideoModule,
  ],
  exports: [
    FormVideoComponent,
  ],
})
export class FormVideoModule { }