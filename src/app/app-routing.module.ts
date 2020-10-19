import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'games',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'customer/:id',
    loadChildren: () => import('./customer/customer.module').then( m => m.CustomerPageModule)
  },
  {
    path: 'games',
    loadChildren: () => import('./games/games.module').then( m => m.GamesPageModule)
  },
  {
    path: 'loans',
    loadChildren: () => import('./loans/loans.module').then( m => m.LoansPageModule)
  },
  {
    path: 'frequent-customers',
    loadChildren: () => import('./frequent-customers/frequent-customers.module').then( m => m.FrequentCustomersPageModule)
  },
  {
    path: 'frequent-games',
    loadChildren: () => import('./frequent-games/frequent-games.module').then( m => m.FrequentGamesPageModule)
  },
  {
    path: 'game/:id',
    loadChildren: () => import('./game/game.module').then( m => m.GamePageModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then( m => m.CustomersPageModule)
  },
  {
    path: 'loan',
    loadChildren: () => import('./loan/loan.module').then( m => m.LoanPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
