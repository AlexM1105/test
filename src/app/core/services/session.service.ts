import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  getToken() {
    return localStorage.getItem('test_token');
  }

  setToken(token: string) {
    localStorage.setItem('test_token', token);
  }

  removeToken() {
    localStorage.removeItem('test_token');
  }
}
