import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { FormSearchComponent } from './form-search.component';

@NgModule({
  declarations: [
    FormSearchComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormSearchComponent,
  ],
})
export class FormSearchModule {}
