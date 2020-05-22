import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaderResponse,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppInterceptorService implements  HttpInterceptor{

  constructor() { }

  handleError(error: HttpErrorResponse){
    console.log('Error occurred');
    return throwError(error);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  const  headers = new HttpHeaders({
    Authorization: ''
  });
  const clone = req.clone({
    headers: headers
  });
  return next.handle(clone).pipe(
    catchError(this.handleError)
  );
  }


}
