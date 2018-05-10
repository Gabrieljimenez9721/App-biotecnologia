import { Component } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';
import { User } from '../../app/models/user';
import { RegistroPage } from '../registro/registro';
import { AngularFireAuth } from 'angularfire2/auth';
import { TemarioPage } from '../temario/temario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tabBarElement: any;
  splash = true;
  user={} as User;
  loginForm: FormGroup;

  constructor(private afAuth: AngularFireAuth, 
    public navCtrl: NavController, public navParams: NavParams,fb: FormBuilder, private alertCtrl: AlertController) {
      this.loginForm = fb.group({
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.compose([Validators.required])]
      });
  }

  async ingreso(user: User){
    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
    .then(res=>{
      this.navCtrl.setRoot(TemarioPage);
    },err=>{
      let msg;
      switch (err.code) { // SWITCH THE CODE RETURNED TO SEE WHAT MESSAGE YOU'LL DISPLAY
        case "auth/wrong-password":
          msg= "Correo o contraseña erróneos.";
          break;
  
        case "auth/user-not-found":
          msg= 'Usuario no encontrado.'
          break;
  
        case "auth/invalid-email":
          msg= 'Correo o contraseña erróneos.';
          break;

        case "auth/user-disabled":
          msg= 'Este usuario fue deshabilitado.';
        break;
      }
      let alert = this.alertCtrl.create({
        subTitle: msg,
        buttons: ['Aceptar']
      });
      alert.present();
    });
  }
  
  registro(){
    this.navCtrl.setRoot(RegistroPage);
  }

  ionViewDidLoad() {
    //this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      //this.tabBarElement.style.display = 'flex';
    }, 4000);
  }

}

