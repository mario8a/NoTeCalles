import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotasPage } from '../index.paginas';
import { LoadingController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
  }

  
  irNotas(){

    this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    }).present();

    this.navCtrl.setRoot(NotasPage);
  }

}
