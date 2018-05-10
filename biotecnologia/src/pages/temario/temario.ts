import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { SeccionPage } from '../seccion/seccion';
import { Observable } from 'rxjs/Observable';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-temario',
  templateUrl: 'temario.html',
})
export class TemarioPage {
  unidades:Observable<any[]>;

  constructor(private afAuth : AngularFireAuth, db: AngularFireDatabase, 
    private toast: ToastController,public navCtrl: NavController) {
    this.unidades = db.list('/unidades').valueChanges();
  }

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data =>{
      if(data && data.email && data.uid){
        this.toast.create({
        message: "Bienvenido a la aplicación",
        duration:3000
        }).present();
      }
    })
  }
  ingreso(){
    this.navCtrl.setRoot(HomePage);
  }
  seccion(idd){
  console.log(idd);
    this.navCtrl.push(SeccionPage, {
      param1: idd
    }); 
  }
}