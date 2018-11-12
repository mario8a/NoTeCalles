import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';




/**
 * Generated class for the TestimoniosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-testimonios',
  templateUrl: 'testimonios.html',
})
export class TestimoniosPage implements OnInit {

  



  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAPI() 
  } 



getAPI(){
  return this.http.get("https://rinkeby.infura.io/v3/3e4bc123307246acb33f04f8d09c2184")
  .subscribe(res =>{
    console.log(res)
  });
  
}

  

}
