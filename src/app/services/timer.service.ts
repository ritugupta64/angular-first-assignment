import { Injectable } from '@angular/core';
import { Observable, Subject, timer, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  timer: Subscription;
  countSubject = new Subject<any>();
  tracker: number = 0;
  logs = []

  pauseCount = 0;
  pauseCountTimer;

  countDown = timer(1000, 2000);

  constructor() {
    this.startTimer();
  }

  destroyTimer() {
    if (this.timer) {
      this.timer.unsubscribe();
    }
  }

  startTimer(): void {
    this.logger('started at')
    this.timer = this.countDown.subscribe((data) => {
      this.tracker = data;
      this.countSubject.next(data);
    });
  }

  start(i: any): void {
    (function timer() {
      if (--i < 0) return;
      setTimeout(function () {
        console.log(i);
        timer();
      }, 1000);
    })();
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


  pause(): void {
    if (this.timer) {
      this.logger('Paused at')
      this.timer.unsubscribe();
    }
  }

  resetTimer(): void {
    this.timer.unsubscribe();
    this.startTimer();
  }
}
