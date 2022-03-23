import { Component } from '@angular/core';

import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private usuarioService: UsuariosService) {
    this.usuarioService.obtenerUsuarios()
      .subscribe({
        next: resp => {
          console.log('rsp: ', resp);  
        },
        error: err => {
          console.log('Error en el app component');
          console.log(err);    
        }
      });
  }


}
