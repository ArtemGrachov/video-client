import { APP_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';

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
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    { provide: APP_ID, useValue: 'app-video' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
