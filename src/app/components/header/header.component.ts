import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  getRandomColor() {
    return '#' + (Math.random() * 0xfffff * 1000000).toString(16).slice(0,6);
  }

  crazyColorChange(event: any) {
    setInterval(() => {
      event.target.style.color = this.getRandomColor();
    }, 1000);
  }
}
