import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage,NotasPage,UpNotasPage,InmailPage,IngresosPage, TestimoniosPage,ModalPage} from "../pages/index.paginas"

import { Camera } from '@ionic-native/camera';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,NotasPage,UpNotasPage,InmailPage,
    IngresosPage,
    TestimoniosPage,
    ModalPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,NotasPage,UpNotasPage,InmailPage,
    IngresosPage,
    TestimoniosPage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
