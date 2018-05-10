import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeccionPage } from './seccion';

@NgModule({
  declarations: [
    SeccionPage,
  ],
  imports: [
    IonicPageModule.forChild(SeccionPage),
  ],
})
export class SeccionPageModule {}
