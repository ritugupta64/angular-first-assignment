import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-one',
  templateUrl: './route-one.component.html',
  styleUrls: ['./route-one.component.css']
})
export class RouteOneComponent implements OnInit {

  index: number = 0;
  showText: any;
  bannerText = [
    {
      name: 'Make health your top priority',
      style: 'btn-light'
    },
    {
      name: 'Health is Wealth',
      style: 'btn-dark'
    },
    {
      name: 'Stay healthy stay fit',
      style: 'btn-secondary'
    }
  ]


  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.showText = this.bannerText[this.index++]
      if (this.index == this.bannerText.length)
        this.index = 0

    }, 1000);
  }

}
