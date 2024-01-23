import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the token from session storage
    const token = sessionStorage.getItem('token');

    // Clone the request and add the token to the headers
    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Pass the cloned request to the next handler
    return next.handle(authRequest);
  }
}
