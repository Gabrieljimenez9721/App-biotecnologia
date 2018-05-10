import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeleccionPage } from '../seleccion/seleccion';
import { VofPage } from '../vof/vof';
import { OrdenarPage } from '../ordenar/ordenar';
import { EvaluacionPage } from '../evaluacion/evaluacion';
import { TeoriaPage } from '../teoria/teoria';

@IonicPage()
@Component({
  selector: 'page-seccion',
  templateUrl: 'seccion.html',
})

export class SeccionPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeccionPage');
  }

  seleccion(){
    var parameter1
    parameter1 = this.navParams.get('param1');
    this.navCtrl.push(SeleccionPage, {
      param1: parameter1
    });
  }
  vof(){
    var parameter1
    parameter1 = this.navParams.get('param1');
    this.navCtrl.push(VofPage, {
      param1: parameter1
    });
  }
  ordenar(){
    var parameter1
    parameter1 = this.navParams.get('param1');
    this.navCtrl.push(OrdenarPage, {
      param1: parameter1
    });
  }
  evaluacion(){
    var parameter1
    parameter1 = this.navParams.get('param1');
    this.navCtrl.push(EvaluacionPage, {
      param1: parameter1
    });
  }
  teoria(){
    var parameter1
    parameter1 = this.navParams.get('param1');
    this.navCtrl.push(TeoriaPage, {
      param1: parameter1
    });
  }
}
