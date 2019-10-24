import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { LockScreenPageModule } from './pages/lock-screen/lock-screen.module';
import { NgIdleModule } from "@ng-idle/core";


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, LockScreenPageModule, NgIdleModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FingerprintAIO,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
