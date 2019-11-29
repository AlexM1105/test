import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { SnackService } from '../services/snack.service';


@Injectable()
export class AuthErrorInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private snackService: SnackService,
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
        if (err.status === 401) {
          this.authService.logout();
        }
        const error = err.error.detail || err.statusText;
        this.snackService.showSnack(error);
        return throwError(error);
      }));
  }
}
