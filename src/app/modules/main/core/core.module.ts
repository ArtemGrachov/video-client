import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from '../../data/auth/auth.module';
import { InitService } from './services/init.service';

import { AuthService } from '../../data/auth/services/auth.service';

function appConfigFactory(initService: InitService, authService: AuthService) {
  return () => initService.init();
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
  ],
  providers: [
    InitService,
    {
      provide: APP_INITIALIZER,
      useFactory: appConfigFactory,
      deps: [InitService, AuthService],
      multi: true,
    },
  ],
})
export class CoreModule { }
