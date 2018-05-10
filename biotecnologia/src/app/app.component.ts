import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  acercade = [
    { title: "ACERCA DE LA APP", description: "Esta aplicación fue creada por los estudiantes de la universidad católica de Colombia Gabriel Jiménez Forero y David Andrés Rubiano Venegas de la facultad de Ingeniería de Sistemas para la materia informática social." },
    { title: "CONTACTANOS", description: "Gabriel Jiménez Forero Celular: 3192839712 Email: gabrieljf97@hotmail.com David Andrés Rubiano Venegas Celular: 3183725621 Email: rubianox6000@gmail.com" },
    
  ];
  
  shownGroup = null;
  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
};
isGroupShown(group) {
    return this.shownGroup === group;
};

} 



