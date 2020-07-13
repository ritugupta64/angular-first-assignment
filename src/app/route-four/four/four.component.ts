import { Component, OnInit } from '@angular/core';
import {TimerService} from '../../services/timer.service'

@Component({
  selector: 'four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {

  // count:number;
  // timer;

  // countPause = 0;
  // countPauseStore;

  constructor(private _timerService: TimerService) {
  }

  ngOnInit() {
    // this._timerService.countSubject.subscribe((data)=>{
    //   this.count = data;
    // });

    // this.pause().subscribe;
   // this.countPauseStore = this.countPause + 1;

  }

  // ngOnDestroy(): void{
  //   this._timerService.destroyTimer();
  // }

  // resetTimer() {
  //   this._timerService.resetTimer();
  // }

  // pause(){
  //   this._timerService.pause();
  // }


}
