import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLoaderComponent } from './page-loader.component';

import { PageLoaderService } from './services/page-loader.service';

@NgModule({
  declarations: [
    PageLoaderComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PageLoaderComponent,
  ],
  providers: [
    PageLoaderService,
  ],
})
export class PageLoaderModule { }
