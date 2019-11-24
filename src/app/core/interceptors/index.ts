import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiUrlInterceptor } from './api-url.interceptor';
import { AuthInterceptor } from './auth.interceptor';
import { AuthErrorInterceptor } from './auth-error.interceptor';

export const INTERCEPTORS = [
  { provide: HTTP_INTERCEPTORS, useClass: ApiUrlInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthErrorInterceptor, multi: true },
];
