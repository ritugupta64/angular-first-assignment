import { Component, Input } from '@angular/core';

@Component({
  selector: 'comp-one',
  templateUrl: './comp-one.component.html',
})
export class CompOneComponent {
  
  @Input ('countDown') countDown;
  
}
