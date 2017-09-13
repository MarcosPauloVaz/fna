import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SobrePage } from '../pages/sobre/sobre';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VotacaoPage } from '../pages/votacao/votacao';
import { ProgramacaoPage } from '../pages/programacao/programacao';
import { ExpositoresPage } from '../pages/expositores/expositores';
import { DetalheExpositorPage } from '../pages/detalhe-expositor/detalhe-expositor';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SobrePage,
    VotacaoPage,
    ProgramacaoPage,
    ExpositoresPage,
    DetalheExpositorPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SobrePage,
    VotacaoPage,
    ProgramacaoPage,
    ExpositoresPage,
    DetalheExpositorPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
