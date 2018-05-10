import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TemarioPage } from './temario';

@NgModule({
  declarations: [
    TemarioPage,
  ],
  imports: [
    IonicPageModule.forChild(TemarioPage),
  ],
})
export class TemarioPageModule {}
