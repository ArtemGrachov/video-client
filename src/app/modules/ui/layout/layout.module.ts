import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormSearchModule } from '../forms/form-search/form-search.module';
import { LogoModule } from '../other/logo/logo.module';

import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormSearchModule,
    LogoModule,
  ]
})
export class LayoutModule { }
