import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpNotasPage } from './up-notas';

@NgModule({
  declarations: [
    UpNotasPage,
  ],
  imports: [
    IonicPageModule.forChild(UpNotasPage),
  ],
})
export class UpNotasPageModule {}
