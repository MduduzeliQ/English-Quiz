import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome'
import { FifaPage } from '../pages/fifa/fifa';
import {PoliticsPage } from '../pages/politics/politics';
import { MathsPage } from '../pages/maths/maths';
import { EnglishPage } from '../pages/english/english';
import {DonePage} from '../pages/done/done';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    FifaPage,
    PoliticsPage,
    MathsPage,
    EnglishPage,
    DonePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    FifaPage,
    PoliticsPage,
    MathsPage,
    EnglishPage,
    DonePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
