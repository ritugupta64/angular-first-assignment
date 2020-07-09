import { Component, OnInit } from '@angular/core';
import {TimerService} from '../services/timer.service'

@Component({
  selector: 'app-route-four',
  templateUrl: './route-four.component.html',
  styleUrls: ['./route-four.component.css'],
  providers:[TimerService]
})
export class RouteFourComponent implements OnInit {

  count = 0;
  logs= [];

  constructor(private _timerService:TimerService) { }

  ngOnInit(){
    this._timerService.source().subscribe((data) => {
      this.count = data
    });

    this._timerService.logTimer().subscribe(() => {
         this.logs.push(new Date());
    })
  }
}


