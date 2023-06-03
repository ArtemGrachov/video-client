import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewLoginModule } from 'src/app/views/view-login/view-login.module';

import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ViewLoginModule
  ]
})
export class LayoutModule { }
