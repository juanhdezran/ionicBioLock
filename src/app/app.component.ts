import { Component } from '@angular/core';

import { Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LockScreenPage } from './pages/lock-screen/lock-screen.page';
import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  modal: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private modalCtrl: ModalController,
    private idle: Idle
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.idle.setIdle(5);
    this.idle.setTimeout(5);
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
    this.idle.onTimeout.subscribe(() => { 
      //verify if lock screen is not opened and if the biometric unlock is enabled
      this.openModal();
    });
    this.idle.watch();    
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.platform.resume.subscribe(() => {
        this.openModal();
      })      
    });
  }

  async openModal(){
      console.log('opening modal ...');
      this.modal = await this.modalCtrl.create({
        component: LockScreenPage,          
      });
      await this.modal.present();
        
  }
}
