import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LockScreenPage } from '../pages/lock-screen/lock-screen.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalCtrl: ModalController) {}

  async openModal(){
    console.log('opening from home')
    let modal = await this.modalCtrl.create({
      component: LockScreenPage,          
    });
    return await modal.present();
  }

}
