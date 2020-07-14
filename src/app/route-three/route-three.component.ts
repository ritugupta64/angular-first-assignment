import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-three',
  templateUrl: './route-three.component.html',
  styleUrls: ['./route-three.component.css'],
})
export class RouteThreeComponent implements OnInit {
  countDownValue: number = 0;
  parentLogger: any[] = [];
  startCountA: number = 0;
  pauseCountA: number = 0;

  constructor() {}

  ngOnInit() {}

  childVal(val: any) {
    this.countDownValue = val;
  }

  logs(val: any) {
    let fromWhere = val ? 'Paused at' : 'Started at';
    this.parentLogger.push(
      {
        loggedFrom: fromWhere,
      },
      {
        date: new Date(),
      }
    );
    if (!val) {
      this.startCountA = this.startCountA + 1;
    } else {
      this.pauseCountA = this.pauseCountA + 1;
    }
  }

  resetHandle() {
    this.parentLogger = [];
    this.startCountA = 0;
    this.pauseCountA = 0;
    this.countDownValue = 0;
  }
}
