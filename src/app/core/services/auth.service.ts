import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Select, Store } from '@ngxs/store';

import { AuthInterface } from '../models/auth.interface';
import { SessionService } from './session.service';
import { SignInAction, SignUpAction } from '../../ngxs/auth/auth.actions';
import { Observable } from 'rxjs';
import { AuthGetterState } from '../../ngxs/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Select(AuthGetterState.isGuest)
  isGuest$: Observable<boolean>;

  @Select(AuthGetterState.getIsSignInFormCorrect)
  isSignInFormCorrect$: Observable<boolean>;

  constructor(
    private sessionService: SessionService,
    private store: Store,
    private httpClient: HttpClient,
  ) {
  }

  signIn(data: AuthInterface): void {
    this.store.dispatch(new SignInAction(data));
  }

  signInRequest(data: AuthInterface) {
    return this.httpClient.post('login/', data);
  }

  signUp({username, password, ...rest}): void {
    const input: AuthInterface = {
      username,
      password
    };
    this.store.dispatch(new SignUpAction(input));
  }

  signUpRequest(data: AuthInterface) {
    return this.httpClient.post('register/', data);
  }

  logout(): void {
    this.sessionService.removeToken();
  }
}
