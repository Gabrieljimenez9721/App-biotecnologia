import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-seleccion',
  templateUrl: 'seleccion.html',
})
export class SeleccionPage {

  selecciones:Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    db: AngularFireDatabase, private alertCtrl: AlertController) {
    var id:number;
    id = navParams.get('param1');
    
    this.selecciones = db.list('/seleccion/'+id+'').valueChanges();

    this.selecciones.forEach(element => {
      console.log(element);
   });
  }

  finalizar(){
    var num;
    num=Math.random();

    if(num <= 0.2){
      let alert = this.alertCtrl.create({
        subTitle: 'La educación no llega sola; se obtiene a raíz del esfuerzo y las ganas de aprender mas. Sigue así.',
        buttons: ['Listo']
      });
      alert.present();
    }if(num >= 0.2 && num <= 0.4){
      let alert = this.alertCtrl.create({
        subTitle: 'No hay trucos, el aprendizaje solo se gana con la constancia por estudiar. No te detengas.',
        buttons: ['Listo']
      });
      alert.present();
    }if(num >= 0.4 && num <= 0.6){
      let alert = this.alertCtrl.create({
        subTitle: 'Muchas cosas pasaran de moda menos el aprendizaje. Sigue aprendiendo.',
        buttons: ['Listo']
      });
      alert.present();
    }if(num >= 0.6 && num <= 0.8){
      let alert = this.alertCtrl.create({
        subTitle: 'Toda tu vida es un ciclo de aprendizaje, debes seguir alimentando tu conocimiento. No pierdas el ritmo',
        buttons: ['Listo']
      });
      alert.present();
    }if(num >= 0.8){
      let alert = this.alertCtrl.create({
        subTitle: 'Si estudias arduamente los resultados no tardaran en aparecer en tu vida. No pares.',
        buttons: ['Listo']
      });
      alert.present();
    }
    this.navCtrl.pop();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SeleccionPage');
  }

}
