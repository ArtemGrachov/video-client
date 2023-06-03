import { APP_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { SimpleModalModule } from '@looorent/ngx-simple-modal';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

import { LayoutModule } from './modules/ui/layout/layout.module';
import { AuthModule } from './modules/data/auth/auth.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment';

console.log('API URL IS', environment.API_URL);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TransferHttpCacheModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    AuthModule,
    SimpleModalModule.forRoot({ container: 'modal-container' })
  ],
  providers: [
    provideClientHydration(),
    { provide: APP_ID, useValue: 'app-video' },
    SsrCookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
