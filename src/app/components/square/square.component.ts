import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Input() value: string = 'X' || 'O';
  @Input() isInLineWin:boolean;
  @Output() buttonClick:EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    this.isInLineWin = false;
  }

  ngOnInit(): void {
  }

  onButtonClick(){
    this.buttonClick.emit();
  }

}
