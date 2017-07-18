import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  home: boolean;

  constructor() {}

  checkRoute() {
    if (window.location.pathname !== '/') {
      return false;
    }
    return true;
  }
}
