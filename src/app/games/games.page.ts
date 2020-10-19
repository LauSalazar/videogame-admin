import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../service/games.service';

export class Game {
  constructor(
    public id: number,
    public title: string,
    public name: string,
    public year: string,
    public protagonist: string,
    public director: string,
    public productor: string,
    public technology: string,
    public state: string,
    public price: number
  ){}
}

export class GameFrequent {
  constructor(
    public prestamos: number,
    public name: string
  ){}
}

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {

  games =[];

  constructor(
    private router: Router,
    private service: GamesService
  ) { }

  ngOnInit() {
    this.loadGames();
  }

  loadGames(){
    this.service.getGames().subscribe(
      response => {
        this.games = response;
      },
      error => {
        console.log(error);
      })
  }

  updateGame(id){
    this.router.navigate([`game`,id]);
  }

  addGame(){
    this.router.navigate(['game', -1]);
  }

}
