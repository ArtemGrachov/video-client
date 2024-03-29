import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AuthModule } from '../auth/auth.module';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { UserApiService } from 'src/app/services/user-api/user-api.service';

import { AUTH_USER_SERVICE } from 'src/app/tokens/auth';

import { InitService } from './services/init.service';
import { ConfigService } from './services/config.service';
import { ErrorHandlerService } from './services/error-handler.service';

function appConfigFactory(initService: InitService) {
  return () => initService.init();
}

@NgModule({
  imports: [
    AuthModule,
  ],
  providers: [
    UserApiService,
    {
      provide: AUTH_USER_SERVICE,
      useClass: UserDataService,
    },
    InitService,
    {
      provide: APP_INITIALIZER,
      useFactory: appConfigFactory,
      deps: [InitService, AUTH_USER_SERVICE],
      multi: true,
    },
    ConfigService,
    ErrorHandlerService,
  ],
})
export class CoreModule { }
