import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../service/games.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  customers =[];

  constructor(
    private router: Router,
    private service: GamesService
  ) { }

  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers(){
    this.service.getCustomers().subscribe(
      response => {
        this.customers = response;
      },
      error => {
        console.log(error);
      })
  }

  add(){
    this.router.navigate(['customer', -1]);
  }

}
