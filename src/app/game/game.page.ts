import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GamesService } from '../service/games.service';
import { Game } from '../games/games.page';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  game: Game
  id: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: GamesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.game = new Game(this.id,'','','','','','', '', '', 0);
    if(this.id!=-1) {
      this.service.getGameById(this.id)
          .subscribe (
            data => this.game = data
          )
    }
  }

  save() {
    if(+this.game.price === 0){
      alert('Ingrese precio');
    } else {
      if(this.id == -1) {
        this.service.saveGame(this.game)
            .subscribe (
              data => {
                this.router.navigate(['games'])
              }
            )
      } else {
        this.service.updateGame(this.game)
            .subscribe (
              data => {
                this.router.navigate(['games'])
              }
            )
      }
    }

  }

}
