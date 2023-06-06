import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormControlModule } from '../form-control/form-control.module';
import { FormServerErrorModule } from '../form-server-error/form-server-error.module';

import { FormCommentComponent } from './form-comment.component';

@NgModule({
  declarations: [
    FormCommentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormControlModule,
    FormServerErrorModule,
  ],
  exports: [
    FormCommentComponent,
  ]
})
export class FormCommentModule { }
