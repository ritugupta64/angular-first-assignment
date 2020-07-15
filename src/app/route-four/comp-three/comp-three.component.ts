import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'three',
  templateUrl: './comp-three.component.html',
})
export class ThreeComponent implements OnInit {
 
  logs: any[] = [];
  
  logger;

  constructor(private _timerService: TimerService) {}

  ngOnInit() {

    this._timerService.loggerOut.subscribe((data) => {
      this.logger = data;
    

      if (!this.logger) {
        this.logs.push(
          {
            loggedFrom: 'Started at',
          },
          {
            date: new Date(),
          }
        );
      }

      if (this.logger) {
        this.logs.push(
          {
            loggedFrom: 'Paused at',
          },
          {
            date: new Date(),
          }
        );
      }
    });

  }
}
