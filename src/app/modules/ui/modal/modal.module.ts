import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { ModalHeaderComponent } from './components/modal-header/modal-header.component';
import { ModalBodyComponent } from './components/modal-body/modal-body.component';

@NgModule({
  declarations: [
    ModalWindowComponent,
    ModalHeaderComponent,
    ModalBodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalWindowComponent,
    ModalHeaderComponent,
    ModalBodyComponent
  ]
})
export class ModalModule { }
