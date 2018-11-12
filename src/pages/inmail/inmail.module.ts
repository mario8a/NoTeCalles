import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InmailPage } from './inmail';

@NgModule({
  declarations: [
    InmailPage,
  ],
  imports: [
    IonicPageModule.forChild(InmailPage),
  ],
})
export class InmailPageModule {}
