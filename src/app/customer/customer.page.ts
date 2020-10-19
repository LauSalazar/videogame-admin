import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GamesService } from '../service/games.service';

export class Customer {
  constructor(
    public id: number,
    public name: string,
    public birthDate: Date,
    public identification: string
  ){}
}

export class CustomerFrequent {
  constructor(
    public prestamos: number,
    public cliente: string
  ){}
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  customer: Customer
  id: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: GamesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.customer = new Customer(this.id,'',new Date(),'');
    if(this.id!=-1) {
      this.service.getCustomerById(this.id)
          .subscribe (
            data => this.customer = data
          )
    }
  }

  save() {
    if(this.id == -1) {
      this.service.saveCustomer(this.customer)
          .subscribe (
            data => {
              this.router.navigate(['games'])
            }
          )
    } 
  }

}
