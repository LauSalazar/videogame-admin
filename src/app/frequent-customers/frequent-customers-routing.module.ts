import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrequentCustomersPage } from './frequent-customers.page';

const routes: Routes = [
  {
    path: '',
    component: FrequentCustomersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrequentCustomersPageRoutingModule {}
