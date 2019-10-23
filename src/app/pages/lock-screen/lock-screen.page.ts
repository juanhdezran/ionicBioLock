import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-lock-screen',
  templateUrl: './lock-screen.page.html',
  styleUrls: ['./lock-screen.page.scss'],
})
export class LockScreenPage implements OnInit {

  constructor(public modalCtrl: ModalController, private faio: FingerprintAIO) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.verify();
  }

  verify(): void{
    this.faio.show({
      clientId: 'FingerPrint-Demo',
      clientSecret: 'ry^WnZBm!7A&8$Xv',
      localizedFallbackTitle: 'Use Pin',
      localizedReason: 'Please authenticate',
      disableBackup: true
    }).then((result: any) => {
      this.modalCtrl.dismiss();
    }).catch((error: any) => {
        this.verify();
    });
  }

}
