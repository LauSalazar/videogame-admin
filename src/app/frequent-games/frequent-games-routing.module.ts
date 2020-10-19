import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrequentGamesPage } from './frequent-games.page';

const routes: Routes = [
  {
    path: '',
    component: FrequentGamesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrequentGamesPageRoutingModule {}
