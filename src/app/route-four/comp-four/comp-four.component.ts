import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'four',
  templateUrl: './comp-four.component.html',
})
export class FourComponent implements OnInit {
  startNo = 0;
  pauseNo = 0;
  logger;

  constructor(private _timerService: TimerService) {}

  ngOnInit() {
    this._timerService.loggerOut.subscribe((data) => {
      this.logger = data;

      if (!this.logger) {
        this.startNo = this.startNo + 1;
      }

      if (this.logger) {
        this.pauseNo = this.pauseNo + 1;
      }
    });
  }
}
