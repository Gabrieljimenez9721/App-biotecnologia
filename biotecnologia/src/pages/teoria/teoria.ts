import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-teoria',
  templateUrl: 'teoria.html',
})

export class TeoriaPage {

  teorias:Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    db: AngularFireDatabase) {
    var id:number;
    id = navParams.get('param1');
    
    this.teorias = db.list('/teorias/'+id+'').valueChanges();

    this.teorias.forEach(element => {
      console.log(element);
   });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeoriaPage');
  }

}

