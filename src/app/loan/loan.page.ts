import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GamesService } from '../service/games.service';
import { Loan } from '../loans/loans.page';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.page.html',
  styleUrls: ['./loan.page.scss'],
})
export class LoanPage implements OnInit {

  loan: Loan;
  customers =[];
  games =[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: GamesService
  ) { }

  ngOnInit() {
    this.loan = new Loan(-1,-1,new Date(),new Date(),'','',0,'');
    this.loadCustomers();
    this.loadGames();
  }

  save(){
    this.service.saveLoan(this.loan).subscribe (
      data => {
        this.router.navigate(['games'])
      })
  }

  loadCustomers(){
    this.service.getCustomers().subscribe(
      response => {
        console.log(response);
        this.customers = response;
      },
      error => {
        console.log(error);
      })
  }
  loadGames(){
    this.service.getGames().subscribe(
      response => {
        console.log(response);
        this.games = response;
      },
      error => {
        console.log(error);
      })
  }

}
