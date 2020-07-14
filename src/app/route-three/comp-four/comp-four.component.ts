import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comp-four',
  templateUrl: './comp-four.component.html',
})
export class CompFourComponent implements OnInit {

  @Input('startNo') startNo: number;
  @Input('pauseNo') pauseNo: number;

  constructor() { }

  ngOnInit(): void {
  }

}
