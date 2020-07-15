import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'two',
  templateUrl: './comp-two.component.html',
  styles: [
    `
      .btn {
        margin: 10px;
      }
    `,
  ],
})
export class TwoComponent implements OnInit, OnDestroy {
  inputField: number = 0;
  timer: any;
  disable: boolean = true;
  isPause: boolean = true;
  isTimer: boolean = false;

  constructor(private _timerService: TimerService) {}

  ngOnInit() {}

  startTimer() {
    this.isPause = !this.isPause;

    if (this.isPause) {
      clearInterval(this.timer);
    }

    if (!this.isPause) {
      this.timer = setInterval(() => {
        if (Number(this.inputField) == 1) {
          clearInterval(this.timer);
        }
        this._timerService.countDown.next(--this.inputField);
      }, 1000);
    }

    this._timerService.loggerOut.next(this.isPause);

    this.isTimer = true;
  }

  resetTimer() {
    this.isTimer = false;
    this._timerService.resetOut.next((this.inputField = 0));
    if (this.inputField > 0) {
      this._timerService.loggerOut.next(this.isPause);
    }
    clearInterval(this.timer);
    this.inputField = 0;
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
