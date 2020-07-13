import { Component, OnInit, OnDestroy } from '@angular/core';
import {TimerService} from '../../services/timer.service'

@Component({
  selector: 'one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent implements OnInit, OnDestroy {

  count:number;

  timer: number;

  constructor(private _timerService: TimerService) {
  }


  ngOnInit(): void {
    this._timerService.countSubject.subscribe((data)=>{
      this.count = data;
    });
  }

  ngOnDestroy(): void{
    this._timerService.destroyTimer();
  }



}


