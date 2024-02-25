import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError, catchError } from 'rxjs';

/**
 ** Un Interceptor no es nada más que un servicio
 ** que se encarga de interceptar las peticiones HTTP.
 ** Algunos reemplazan el Service por Interceptor en el
 ** nombre de la clase para que se más explícito,
 ** en nuestro caso lo dejaremos tal como se crea un
 ** servicio
 */

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Pasó por el interceptor');

    const headers = new HttpHeaders({
      'x-token-usuario': 'ABCDEFGHIJ123456SDFASDF'
    });

    //Agregando el header al request
    const reqClone = req.clone({
      headers
    });

    return next.handle(reqClone)
      .pipe(
        catchError(this.manejarError)
      )
  }

  manejarError(error: HttpErrorResponse) {
    console.log('Hubo un error: ', error);
    return throwError(() => new Error('Error personalizado desde método manejarError e interceptor!!!'));
  }
}
