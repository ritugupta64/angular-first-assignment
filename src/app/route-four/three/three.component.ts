import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css'],
  providers: [TimerService],
})
export class ThreeComponent implements OnInit {
  count = 0;
  logs = [];
  timer;

  constructor(private _timerService: TimerService) {}

  ngOnInit() {
    this._timerService.countSubject.subscribe(() => {
      this.logs.push(new Date());
    });
  }
}
