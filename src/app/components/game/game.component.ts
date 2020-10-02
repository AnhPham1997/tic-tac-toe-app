import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  xIsNext:boolean;
  winner:string;
  squares: Array<any>;
  lineWin: Array<number>;
  constructor() {
    this.resetGame();
  }

  ngOnInit(): void {
  }

  resetGame() {
    this.squares = new Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.lineWin = [];
  }

  fillValue(val) {
    if(!this.squares[val] && !this.winner){
      this.squares[val] = this.xIsNext ? 'X' : 'O';
      this.xIsNext = !this.xIsNext;
      this.winner = this.calcWinner();
    }
  }

  calcWinner() {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for(let i = 0,linesLen = lines.length; i < linesLen; i++){
      const [a,b,c] = lines[i];
      if(this.squares[a] && this.squares[a] === this.squares[b] && this.squares[b] === this.squares[c]){
        this.lineWin = [a,b,c];
        return this.squares[a]
      }
    }
    return null;
  }

}
