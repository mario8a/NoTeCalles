import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { LoginPage,InmailPage,NotasPage,UpNotasPage,IngresosPage,TestimoniosPage } from '../pages/index.paginas';

export interface MenuItem {
  title: string;
  component: any;
  icon: string;
}


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;

  subirNota = UpNotasPage;
  ingreso = IngresosPage;
  Inmail = InmailPage;
  Nota = NotasPage;
  testi = TestimoniosPage;





  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCrtl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
   
    });

    
  }

  abrirPagina(pagina:any){

    this.rootPage = pagina;
    this.menuCrtl.close();


  }
  
  logout(){
    this.nav.setRoot(LoginPage);
  }

  
  
  }


  


