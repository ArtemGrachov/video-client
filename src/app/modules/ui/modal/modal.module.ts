import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { ModalHeaderComponent } from './components/modal-header/modal-header.component';

@NgModule({
  declarations: [
    ModalWindowComponent,
    ModalHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalWindowComponent,
    ModalHeaderComponent
  ]
})
export class ModalModule { }
