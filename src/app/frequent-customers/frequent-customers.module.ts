import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrequentCustomersPageRoutingModule } from './frequent-customers-routing.module';

import { FrequentCustomersPage } from './frequent-customers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrequentCustomersPageRoutingModule
  ],
  declarations: [FrequentCustomersPage]
})
export class FrequentCustomersPageModule {}
