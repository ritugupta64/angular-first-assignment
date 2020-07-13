import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-route-six',
  templateUrl: './route-six.component.html',
  styleUrls: ['./route-six.component.css']
})
export class RouteSixComponent {

  @ViewChild('abcd')

  private abcd: ElementRef;	
  constructor(private renderer: Renderer2) {
  }
  onClick() {
    const div = this.renderer.createElement('div');
    div.classList.add('dynamic-btn');
    const btn = this.renderer.createElement('button');
    btn.classList.add('btn', 'btn-primary');
    const btnText = this.renderer.createText('button');
    // const text = this.renderer.createText('Click here to add li');
    this.renderer.appendChild(btn, btnText);
    this.renderer.appendChild(div, btn)
    this.renderer.appendChild(this.abcd.nativeElement, div);
  }

}
