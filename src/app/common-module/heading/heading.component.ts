import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  @Input('elementType') elementType = ''
  @Input('elementText') elementText = ''
  @Input('variant') variant = ''

  constructor() { }

  ngOnInit() {
  }




}
