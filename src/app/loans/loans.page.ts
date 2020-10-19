import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../service/games.service';

export class Loan {
  constructor(
    public idCustomer: number,
    public idVideogame: number,
    public startDate: Date,
    public endDate: Date,
    public title: string,
    public state: string,
    public price: number,
    public customer: string
  ){}
}

@Component({
  selector: 'app-loans',
  templateUrl: './loans.page.html',
  styleUrls: ['./loans.page.scss'],
})
export class LoansPage implements OnInit {

  loans =[];

  constructor(
    private router: Router,
    private service: GamesService
  ) { }

  ngOnInit() {
    this.loadLoans();
  }
  loadLoans(){
    this.service.getTodaysLoans().subscribe(
      response => {
        this.loans = response;
      },
      error => {
        console.log(error);
      })
  }

  add(){
    this.router.navigate(['loan']);
  }

}
