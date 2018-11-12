import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';
import {NotasPage} from '../index.paginas';

/**
 * Generated class for the UpNotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-up-notas',
  templateUrl: 'up-notas.html',
})
export class UpNotasPage {

  imagenPrevia:string;
  imagen64: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera,
    public alertCtrl: AlertController) {
  }

  mostrarFoto(){

    const options: CameraOptions = {
          quality: 50,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
        }
  
        this.camera.getPicture(options).then((imageData) => {
         // imageData is either a base64 encoded string or a file URI
         // If it's base64 (DATA_URL):
         this.imagenPrevia =  'data:image/jpg;base64,' + imageData;
         this.imagen64 = imageData;
        }, (err) => {
         // Handle error
         console.log("Error en camara",JSON.stringify(err))
        });
    }

    acepto(){
      const alert = this.alertCtrl.create({
        title: 'Listo',
        subTitle: 'Tu nota sera enviada a revision para poder ser publicada',
        buttons: ['OK']
      });
      alert.present();

      this.navCtrl.setRoot(NotasPage)
    }
    

    }


