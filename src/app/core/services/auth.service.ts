import { Injectable } from '@angular/core';

import { AuthInterface } from '../models/auth.interface';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private sessionService: SessionService,
  ) {
  }

  login(userData: AuthInterface) {
  }

  register(userData: AuthInterface) {
  }

  logout() {
    this.sessionService.removeToken();
  }
}
