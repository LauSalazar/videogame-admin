import { Component, OnInit } from '@angular/core';
import { GamesService } from '../service/games.service';

@Component({
  selector: 'app-frequent-games',
  templateUrl: './frequent-games.page.html',
  styleUrls: ['./frequent-games.page.scss'],
})
export class FrequentGamesPage implements OnInit {

  games = [];

  constructor(
    private gameService: GamesService
  ) { }

  ngOnInit() {
    this.loadFrequentCustomer();
  }

  loadFrequentCustomer(){
    this.gameService.getGameFrequent().subscribe(
      response => {
        this.games = response;
      },
      error => {
        console.log(error);
      })
  }

}
