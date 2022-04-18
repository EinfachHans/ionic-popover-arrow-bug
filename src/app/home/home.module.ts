import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PopoverComponent } from '../popover/popover.component';
import { PopoverValueComponent } from '../popover-value/popover-value.component';
import { PriceComponent } from '../price/price.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, PriceComponent, PopoverComponent, PopoverValueComponent]
})
export class HomePageModule {}
