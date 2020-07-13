import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-three',
  templateUrl: './route-three.component.html',
  styleUrls: ['./route-three.component.css'],
})
export class RouteThreeComponent implements OnInit {
  countDown: number = 0;
  startCountNo: number = 0;
  pauseCountNo: number = 0;
  logs: any[] = [];
  counter;
  isPause: boolean = false;
  reverse: boolean = false;

  constructor() {}

  startTimer() {
    this.logger('Started at');
    this.counter = setInterval(() => {
      if (!this.isPause) {
        this.reverse ? this.countDown-- : this.countDown++;
      }
      if (this.countDown == 0) {
        clearInterval(this.counter);
      }
    }, 1000);
  }

  logger(str: string) {
    this.logs.push(
      {
        loggedFrom: str,
      },
      {
        date: new Date(),
      }
    );
  }

  ngOnInit() {
    this.startTimer();
  }

  reset() {
    clearInterval(this.counter);
    this.countDown = 0;
    this.reverse = false;
    this.startTimer();
   
   }

  pause() {
    if (!this.isPause && !this.reverse) {
      this.pauseCountNo++;
      this.logger('Pause at');
    } else if (this.isPause && this.reverse) {
      this.logger('Started at');
      this.startCountNo++;
    } else {
      this.logger('Pause at');
      this.pauseCountNo++;
    }
    this.reverse = true;
    this.isPause = !this.isPause;
  }
}
