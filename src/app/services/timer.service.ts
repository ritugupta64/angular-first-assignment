import { Injectable } from '@angular/core';
import { Subject, timer, Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TimerService {

  timer: Subscription;
  countSubject = new Subject<any>();
  tracker: number = 0;

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

  pause(): void {
    if (this.timer) {
      this.timer.unsubscribe();
     // this.pauseCountTimer = this.pauseCount + 1;
    }
    
  }

  resetTimer(): void {
    this.timer.unsubscribe();
    this.startTimer();
  }


  //   start(i): Observable<any> {
  //     (function timer() {
  //       if (--i < 0) return;
  //       setTimeout(function () {
  //        // console.log(i);
  //         timer();
  //       }, 1000);
  //     })();
  //   }

  // start(i): Observable<any>{
  //     if (--i < 0) return;

  //     return i;
  // }



}
