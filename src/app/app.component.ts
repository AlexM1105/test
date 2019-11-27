import { Component, HostListener } from '@angular/core';

import { AuthService } from './core/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  @HostListener('window:onbeforeunload', ['$event'])
  clearLocalStorage(event) {
    this.authService.logout();
  }

  constructor(
    private authService: AuthService,
  ) {
  }
}
