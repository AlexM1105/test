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

  signIn(data: AuthInterface): void {
  }

  signUp(data): void {
    const input: AuthInterface = {
      username: data.name,
      password: data.password,
    };
  }

  logout(): void {
    this.sessionService.removeToken();
  }
}
