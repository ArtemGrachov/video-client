import { APP_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { SimpleModalModule, defaultSimpleModalOptions } from '@looorent/ngx-simple-modal';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { CoreModule } from './modules/main/core/core.module';
import { HeaderModule } from './modules/ui/layout/header/header.module';
import { FooterModule } from './modules/ui/layout/footer/footer.module';
import { NavModule } from './modules/ui/layout/nav/nav.module';
import { ModalsModule } from './modules/main/modals/modals.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TransferHttpCacheModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    SimpleModalModule.forRoot(
      {
        container: 'modal-container',
      },
      {
        ...defaultSimpleModalOptions,
        animationDuration: 200,
        wrapperDefaultClasses: 'modal modal-backdrop modal-default',
        wrapperClass: 'modal-active',
      },
    ),
    CoreModule,
    ModalsModule,
    HeaderModule,
    FooterModule,
    NavModule,
  ],
  providers: [
    provideClientHydration(),
    { provide: APP_ID, useValue: 'app-video' },
    SsrCookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
