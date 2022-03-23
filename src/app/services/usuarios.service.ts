import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

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

    return this.http.get(`https://reqres.in/api/user`, { params, headers });
  }

}
