import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthApiModule } from '../auth-api/auth-api.module';

import { RefreshTokenDataService } from './services/refresh-token-data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthApiModule,
  ],
  providers: [
    RefreshTokenDataService,
  ],
})
export class RefreshTokenDataModule { }
