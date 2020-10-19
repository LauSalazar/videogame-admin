import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrequentGamesPageRoutingModule } from './frequent-games-routing.module';

import { FrequentGamesPage } from './frequent-games.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrequentGamesPageRoutingModule
  ],
  declarations: [FrequentGamesPage]
})
export class FrequentGamesPageModule {}
