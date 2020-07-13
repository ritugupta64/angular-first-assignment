import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'comp-two',
  templateUrl: './comp-two.component.html',
  styles: [
    `
    .btn{
      margin: 10px;
  }
    `
  ]
})
export class CompTwoComponent implements OnInit {

 @Input('countDownTwo') countDownTwo: number
 @Output('resetClick') resetClick = new EventEmitter()
 @Output ('pauseClick') pauseClick = new EventEmitter()
 
  constructor() {}

  ngOnInit() {}

  resetBtn(){
    this.resetClick.emit()
  }

  pauseBtn(){
    this.pauseClick.emit()
  }

}
