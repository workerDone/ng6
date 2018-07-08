import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent, HttpInterceptor,
  HttpHandler, HttpRequest,
  HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(
    request: HttpRequest<any>, next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = 'this.jwtService.getToken();';

    if (token) {
      request = request.clone(
        {
          headers: request.headers.set('authorization', token)
        }
      );
    }

    return next.handle(request);
  }
}
