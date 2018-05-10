import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { User } from '../../app/models/user';
import { AngularFireAuth } from "angularfire2/auth";
import { HomePage } from '../home/home';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  registroError: string;
  registroForm: FormGroup;

  user={} as User;
  constructor(private afAuth:AngularFireAuth,public navCtrl: NavController,
    public navParams: NavParams, fb: FormBuilder,private toast: ToastController,
     private alertCtrl: AlertController) {
      this.registroForm = fb.group({
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
      });
    }

  ingreso(){
  this.navCtrl.setRoot(HomePage);
  }
  async registro(user:User){
    try{
      this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password)

      .then(res=>{
        this.navCtrl.setRoot(HomePage);
        this.toast.create({
          message: "Usuario creado satisfactoriamente",
          duration:3000
        }).present();
      },err=>{
      let msg;
      switch (err.code) {
        case "auth/email-already-in-use":
          msg= "Ya existe este correo.";
          break;

        case "auth/weak-password":
          msg= 'Contraseña muy debil.'
          break;
  
        case "auth/invalid-email":
          msg= 'El email ingresado es incorrecto.';
          break;
      }
      let alert = this.alertCtrl.create({
        subTitle: msg,
        buttons: ['Aceptar']
      });
      alert.present();
    });
    }catch(e){
      console.error(e);
    }
  }

}
