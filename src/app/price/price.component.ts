import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent {

  constructor(private popoverCtrl: PopoverController) {
  }

  openPopover(event: MouseEvent) {
    this.popoverCtrl
      .create({
        component: PopoverComponent,
        componentProps: {
          auction: {
            buyerPurchaseFee: 109,
            buyerSuccessFee: 99
          }
        },
        event,
        cssClass: 'popover-fit-content'
      })
      .then(popover => {
        void popover.present();
      });
  }
}
