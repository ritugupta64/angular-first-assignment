import {
  Component,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-route-six',
  templateUrl: './route-six.component.html',
  styleUrls: ['./route-six.component.css'],
})
export class RouteSixComponent {
  public items: number[] = [1];

  @HostListener('window:scroll')
  scrollItems(): boolean {
    if (this.items.length !== 80) {
      this.items.push(this.items.length + 1);
    } else {
      return false;
    }
  }

  getClickedItems(i) {
    alert(`div ${i} clicked`);
  }
}
