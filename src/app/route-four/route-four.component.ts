import { Component } from '@angular/core';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-route-four',
  templateUrl: './route-four.component.html',
  styleUrls: ['./route-four.component.css'],
  providers: [TimerService]
})
export class RouteFourComponent {
  constructor() {}
}
