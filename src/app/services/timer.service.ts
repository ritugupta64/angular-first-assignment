import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';


@Injectable()
export class TimerService {
 
  countDown = timer(1000, 2000);  

  source(): Observable<any> {
    return this.countDown
  }

  
//   clear(): Observable<any>{
//      clearInterval()
//   }

// numbers = interval(1000);

logTimer(){
  return this.countDown.pipe(take(4));
}






}
