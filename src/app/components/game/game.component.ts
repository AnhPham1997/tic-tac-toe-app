import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  xIsNext:boolean;
  winner:string;
  board: Array<any>;
  constructor() { }

  ngOnInit(): void {
    this.resetGame();
  }

  resetGame() {
    this.board = new Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  calcWinner() {

  }

}
