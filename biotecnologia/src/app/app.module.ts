import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from "angularfire2/auth";
import { FIREBASE_CONFIG } from './app.firebase.config';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';     
import { CustomFormsModule } from 'ng2-validation';
import { DragulaModule } from 'ng2-dragula';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistroPage } from '../pages/registro/registro';
import { TemarioPage } from '../pages/temario/temario';
import { SeccionPage } from '../pages/seccion/seccion';
import { SeleccionPage } from '../pages/seleccion/seleccion';
import { VofPage } from '../pages/vof/vof';
import { OrdenarPage } from '../pages/ordenar/ordenar';
import { EvaluacionPage } from '../pages/evaluacion/evaluacion';
import { TeoriaPage } from '../pages/teoria/teoria';
/*Services*/
import { EvaluationsService } from './app.service';



@NgModule({
  declarations: [
    MyApp,
    RegistroPage,
    HomePage,
    TemarioPage,
    SeccionPage,
    SeleccionPage,
    VofPage,
    OrdenarPage,
    EvaluacionPage,
    TeoriaPage,
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    CustomFormsModule,
    DragulaModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegistroPage,
    HomePage,
    TemarioPage,
    SeccionPage,
    SeleccionPage,
    VofPage,
    OrdenarPage,
    EvaluacionPage,
    TeoriaPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EvaluationsService
  ]
})
export class AppModule {}
