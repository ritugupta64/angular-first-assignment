import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'one',
  templateUrl: './comp-one.component.html',
})
export class OneComponent implements OnInit {
  count;

  constructor(private _timerService: TimerService) {}

  ngOnInit() {
    this._timerService.countDown.subscribe((data) => {
      this.count = data;
    });

    this._timerService.resetOut.subscribe((data) => {
      this.count = data;
    });
  }
}
