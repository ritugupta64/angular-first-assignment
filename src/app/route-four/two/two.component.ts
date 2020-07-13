import { Component, OnInit, OnDestroy } from '@angular/core';
import {TimerService} from '../../services/timer.service'

@Component({
  selector: 'two',
  templateUrl: './two.component.html',
  styles: [
    `
    .btn{
      margin: 10px;
  }
    `
  ]
})
export class TwoComponent implements OnInit, OnDestroy {

  count:number;
  timer;

  constructor(private _timerService: TimerService) {
  }

  ngOnInit() {
    this._timerService.countSubject.subscribe((data)=>{
      this.count = data;
    });
  }

  ngOnDestroy(): void{
    this._timerService.destroyTimer();
  }

  resetTimer() {
    this._timerService.resetTimer();
  }

  pause(){
    this._timerService.pause();
    this._timerService.start(this.count)
  }


}
