import { Component, OnInit } from '@angular/core';
import { GamesService } from '../service/games.service';

@Component({
  selector: 'app-frequent-customers',
  templateUrl: './frequent-customers.page.html',
  styleUrls: ['./frequent-customers.page.scss'],
})
export class FrequentCustomersPage implements OnInit {

  customers = [];

  constructor(
    private gameService: GamesService
  ) { }

  ngOnInit() {
    this.loadFrequentCustomer();
  }

  loadFrequentCustomer(){
    this.gameService.getFrequentCustomers().subscribe(
      response => {
        this.customers = response;
      },
      error => {
        console.log(error);
      })
  }

}
