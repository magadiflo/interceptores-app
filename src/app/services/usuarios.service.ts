import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { map, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios() {
    let params = new HttpParams().append('page', '2');
    params = params.append('nombre', 'martin');

    const headers = new HttpHeaders({
      'x-token-usuario': 'ABCDEFGHIJ123456SDFASDF'
    });

    return this.http.get(`https://reqres000.in/api/user`, { params, headers })
      .pipe(
        map((resp: any) => resp.data),
        catchError(this.manejarError)
      );
  }

  manejarError(error: HttpErrorResponse) {
    console.log('Hubo un error: ', error);
    return throwError(() => new Error('Error personalizado desde método manejarError!!!'));
  }

}
