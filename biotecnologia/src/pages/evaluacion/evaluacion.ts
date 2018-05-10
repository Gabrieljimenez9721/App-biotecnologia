import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { EvaluationsService } from '../../app/app.service';

@IonicPage()
@Component({
  selector: 'page-evaluacion',
  templateUrl: 'evaluacion.html',
})
export class EvaluacionPage implements OnInit{
  evaluations1: any[];
  evaluations2: any[];
  evaluations3: any[];
  evaluations4: any[];
  evaluations5: any[];
  evaluations6: any[];
  evaluations7: any[];
  evaluations8: any[];
  evaluations9: any[];
  evaluations10: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    db: AngularFireDatabase, private evaluationsService: EvaluationsService,
    private alertCtrl: AlertController) { }

  ngOnInit(){
    var id: number;
    id = this.navParams.get('param1');
    this.evaluationsService.getEvaluations(id, 'a').subscribe(
      res => {
        this.evaluations1 = res;
      }, error =>{
        console.log(error);
      }
    );
    this.evaluationsService.getEvaluations(id, 'b').subscribe(
      res => {
        this.evaluations2 = res;
      }, error =>{
        console.log(error);
      }
    );
    this.evaluationsService.getEvaluations(id, 'c').subscribe(
      res => {
        this.evaluations3 = res;
      }, error =>{
        console.log(error);
      }
    );
    this.evaluationsService.getEvaluations(id, 'd').subscribe(
      res => {
        this.evaluations4 = res;
      }, error =>{
        console.log(error);
      }
    );
    this.evaluationsService.getEvaluations(id, 'e').subscribe(
      res => {
        this.evaluations5 = res;
      }, error =>{
        console.log(error);
      }
    );
    this.evaluationsService.getEvaluations(id, 'f').subscribe(
      res => {
        this.evaluations6 = res;
      }, error =>{
        console.log(error);
      }
    );
    this.evaluationsService.getEvaluations(id, 'g').subscribe(
      res => {
        this.evaluations7 = res;
      }, error =>{
        console.log(error);
      }
    );
    this.evaluationsService.getEvaluations(id, 'h').subscribe(
      res => {
        this.evaluations8 = res;
      }, error =>{
        console.log(error);
      }
    );
    this.evaluationsService.getEvaluations(id, 'i').subscribe(
      res => {
        this.evaluations9 = res;
      }, error =>{
        console.log(error);
      }
    );
    this.evaluationsService.getEvaluations(id, 'j').subscribe(
      res => {
        this.evaluations10 = res;
      }, error =>{
        console.log(error);
      }
    );
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EvaluacionPage');
  }

  finalizar() {
      var contador=0;
      var rta = new Array(9);
      var frta = new Array(9);
          if ((<HTMLInputElement>document.getElementById('1')).checked) {
            rta[0] = (<HTMLInputElement>document.getElementById('1')).value;

          } else if ((<HTMLInputElement>document.getElementById('2')).checked) {
            rta[0] = (<HTMLInputElement>document.getElementById('2')).value;

          } else if ((<HTMLInputElement>document.getElementById('3')).checked) {
            rta[0] = (<HTMLInputElement>document.getElementById('3')).value;

          } else if ((<HTMLInputElement>document.getElementById('4')).checked) {
            rta[0] = (<HTMLInputElement>document.getElementById('4')).value;
          }
          if((<HTMLInputElement>document.getElementById('r1')).checked){
            frta[0]=(<HTMLInputElement>document.getElementById('r1')).value;
          }
          //respueta dos
          if ((<HTMLInputElement>document.getElementById('5')).checked) {
            rta[1] = (<HTMLInputElement>document.getElementById('5')).value;

          } else if ((<HTMLInputElement>document.getElementById('6')).checked) {
            rta[1] = (<HTMLInputElement>document.getElementById('6')).value;

          } else if ((<HTMLInputElement>document.getElementById('7')).checked) {
            rta[1] = (<HTMLInputElement>document.getElementById('7')).value;

          } else if ((<HTMLInputElement>document.getElementById('8')).checked) {
            rta[1] = (<HTMLInputElement>document.getElementById('8')).value;
          }
          if((<HTMLInputElement>document.getElementById('r2')).checked){
            frta[1]=(<HTMLInputElement>document.getElementById('r2')).value;
          }
          //respueta tres
          if((<HTMLInputElement>document.getElementById('9')).checked) {
            rta[2] = (<HTMLInputElement>document.getElementById('9')).value;
          } else if ((<HTMLInputElement>document.getElementById('10')).checked) {
            rta[2] = (<HTMLInputElement>document.getElementById('10')).value;

          } else if ((<HTMLInputElement>document.getElementById('11')).checked) {
            rta[2] = (<HTMLInputElement>document.getElementById('11')).value;

          } else if ((<HTMLInputElement>document.getElementById('12')).checked) {
            rta[2] = (<HTMLInputElement>document.getElementById('12')).value;
          }
          if((<HTMLInputElement>document.getElementById('r3')).checked){
            frta[2]=(<HTMLInputElement>document.getElementById('r3')).value;
          }
          //respuesta cuatro

          if((<HTMLInputElement>document.getElementById('13')).checked) {
            rta[3] = (<HTMLInputElement>document.getElementById('13')).value;
          } else if ((<HTMLInputElement>document.getElementById('14')).checked) {
            rta[3] = (<HTMLInputElement>document.getElementById('14')).value;

          } else if ((<HTMLInputElement>document.getElementById('15')).checked) {
            rta[3] = (<HTMLInputElement>document.getElementById('15')).value;

          } else if ((<HTMLInputElement>document.getElementById('16')).checked) {
            rta[3] = (<HTMLInputElement>document.getElementById('16')).value;
          }
          if((<HTMLInputElement>document.getElementById('r4')).checked){
            frta[3]=(<HTMLInputElement>document.getElementById('r4')).value;
          }
          // respuesta cinco
          if((<HTMLInputElement>document.getElementById('17')).checked) {
            rta[4] = (<HTMLInputElement>document.getElementById('17')).value;
          } else if ((<HTMLInputElement>document.getElementById('18')).checked) {
            rta[4] = (<HTMLInputElement>document.getElementById('18')).value;

          } else if ((<HTMLInputElement>document.getElementById('19')).checked) {
            rta[4] = (<HTMLInputElement>document.getElementById('19')).value;

          } else if ((<HTMLInputElement>document.getElementById('20')).checked) {
            rta[4] = (<HTMLInputElement>document.getElementById('20')).value;
          }
          if((<HTMLInputElement>document.getElementById('r5')).checked){
            frta[4]=(<HTMLInputElement>document.getElementById('r5')).value;
          }
          // respuesta seis
          if((<HTMLInputElement>document.getElementById('21')).checked) {
            rta[5] = (<HTMLInputElement>document.getElementById('21')).value;
          } else if ((<HTMLInputElement>document.getElementById('22')).checked) {
            rta[5] = (<HTMLInputElement>document.getElementById('22')).value;

          } else if ((<HTMLInputElement>document.getElementById('23')).checked) {
            rta[5] = (<HTMLInputElement>document.getElementById('23')).value;

          } else if ((<HTMLInputElement>document.getElementById('24')).checked) {
            rta[5] = (<HTMLInputElement>document.getElementById('24')).value;
          }
          if((<HTMLInputElement>document.getElementById('r6')).checked){
            frta[5]=(<HTMLInputElement>document.getElementById('r6')).value;
          }
          //  respuesta siete
          if((<HTMLInputElement>document.getElementById('25')).checked) {
            rta[6] = (<HTMLInputElement>document.getElementById('25')).value;
          } else if ((<HTMLInputElement>document.getElementById('26')).checked) {
            rta[6] = (<HTMLInputElement>document.getElementById('26')).value;

          } else if ((<HTMLInputElement>document.getElementById('27')).checked) {
            rta[6] = (<HTMLInputElement>document.getElementById('27')).value;

          } else if ((<HTMLInputElement>document.getElementById('28')).checked) {
            rta[6] = (<HTMLInputElement>document.getElementById('28')).value;
          }
          if((<HTMLInputElement>document.getElementById('r7')).checked){
            frta[6]=(<HTMLInputElement>document.getElementById('r7')).value;
          }
          // respuesta ocho
          if((<HTMLInputElement>document.getElementById('29')).checked) {
            rta[7] = (<HTMLInputElement>document.getElementById('29')).value;
          } else if ((<HTMLInputElement>document.getElementById('30')).checked) {
            rta[7] = (<HTMLInputElement>document.getElementById('30')).value;

          } else if ((<HTMLInputElement>document.getElementById('31')).checked) {
            rta[7] = (<HTMLInputElement>document.getElementById('31')).value;

          } else if ((<HTMLInputElement>document.getElementById('32')).checked) {
            rta[7] = (<HTMLInputElement>document.getElementById('32')).value;
          }
          if((<HTMLInputElement>document.getElementById('r8')).checked){
            frta[7]=(<HTMLInputElement>document.getElementById('r8')).value;
          }
          // respuesta nueve
          if((<HTMLInputElement>document.getElementById('33')).checked) {
            rta[8] = (<HTMLInputElement>document.getElementById('33')).value;
          } else if ((<HTMLInputElement>document.getElementById('34')).checked) {
            rta[8] = (<HTMLInputElement>document.getElementById('34')).value;

          } else if ((<HTMLInputElement>document.getElementById('35')).checked) {
            rta[8] = (<HTMLInputElement>document.getElementById('35')).value;

          } else if ((<HTMLInputElement>document.getElementById('36')).checked) {
            rta[8] = (<HTMLInputElement>document.getElementById('36')).value;
          }
          if((<HTMLInputElement>document.getElementById('r9')).checked){
            frta[8]=(<HTMLInputElement>document.getElementById('r9')).value;
          }
          // respuesta dies
          if((<HTMLInputElement>document.getElementById('37')).checked) {
            rta[9] = (<HTMLInputElement>document.getElementById('37')).value;
          } else if ((<HTMLInputElement>document.getElementById('38')).checked) {
            rta[9] = (<HTMLInputElement>document.getElementById('38')).value;

          } else if ((<HTMLInputElement>document.getElementById('39')).checked) {
            rta[9] = (<HTMLInputElement>document.getElementById('39')).value;

          } else if ((<HTMLInputElement>document.getElementById('40')).checked) {
            rta[9] = (<HTMLInputElement>document.getElementById('40')).value;
          }
          if((<HTMLInputElement>document.getElementById('r10')).checked){
            frta[9]=(<HTMLInputElement>document.getElementById('r10')).value;
          }
          for(var i=0;i<10;i++){            
            if(rta[i]==frta[i]){
              contador++;
            }
          }         
          let alert = this.alertCtrl.create({
            subTitle: 'Obtuviste '+contador+' preguntas correctas de 10.',
            buttons: ['Aceptar']
          });
          alert.present();
    this.navCtrl.pop();
  }

}
