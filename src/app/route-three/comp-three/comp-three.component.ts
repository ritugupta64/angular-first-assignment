import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comp-three',
  templateUrl: './comp-three.component.html',
})
export class CompThreeComponent implements OnInit {

  @Input('log') log;

  constructor() { }

  ngOnInit(): void {
  }

}
