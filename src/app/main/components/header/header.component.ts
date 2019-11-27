import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from '../../../core/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  isGuest$: Observable<boolean> = this.authService.isGuest$;

  constructor(
    private authService: AuthService,
  ) {
  }
}
