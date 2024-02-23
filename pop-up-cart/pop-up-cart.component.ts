import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pop-up-cart',
  templateUrl: './pop-up-cart.component.html',
  styleUrls: ['./pop-up-cart.component.scss'],
})
export class PopUpCartComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  closeCartModal() {
    this.modalController.dismiss();
  }
}
