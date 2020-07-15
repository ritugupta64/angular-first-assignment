import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TimerService {
  countDown = new Subject();
  loggerOut = new Subject();
  resetOut = new Subject();
  constructor() {}
}
