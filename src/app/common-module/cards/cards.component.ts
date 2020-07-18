import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input('cardImage') cardImage: string = '';
  @Input('cardName') cardName: string = '';
  @Input('cardPrice') cardPrice: string = '';
  

  constructor() { }

  ngOnInit(): void {
  }

}
