import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormControlModule } from '../form-control/form-control.module';
import { FormServerErrorModule } from '../form-server-error/form-server-error.module';

import { FormAddToPlaylistComponent } from './form-add-to-playlist.component';

@NgModule({
  declarations: [
    FormAddToPlaylistComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormControlModule,
    FormServerErrorModule,
  ],
  exports: [
    FormAddToPlaylistComponent,
  ],
})
export class FormAddToPlaylistModule { }
