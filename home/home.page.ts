import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopUpOrderComponent } from '../pop-up-order/pop-up-order.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController) { }

  // Open the order pop up
  async openOrderModal() {
    const modal = await this.modalController.create({
      component: PopUpOrderComponent, componentProps: {},
    });
    return await modal.present();
  }



}
