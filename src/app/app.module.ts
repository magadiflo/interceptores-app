import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InterceptorService } from './interceptors/interceptor.service';

/**
 ** multi: true
 ** ***********
 ** Si los interceptores que se agregan al arreglo de providers tienen definido
 ** el multi:true, entonces se permite que todos los interceptores se ejecuten
 ** en orden secuencial, de acuerdo a cómo se han definido en el arreglo.
 ** En caso de que los interceptores definidos tengan el multi:false, solo se
 ** se ejecutará un interceptor y será el último que se haya definido.
 **
 ** En el caso específico de los interceptores HTTP en Angular, cuando defines un
 ** interceptor y lo proporcionas utilizando el token HTTP_INTERCEPTORS, puedes tener
 ** más de un interceptor en tu aplicación que actúe sobre las solicitudes HTTP.
 **
 ** Al establecer multi: true, estás indicando que Angular debe permitir la inyección
 ** de múltiples implementaciones del mismo servicio. Sin esta configuración,
 ** Angular asumiría que solo hay una implementación válida para el servicio asociado
 ** a ese token y podría sobrescribirlo.
 **
 ** Entonces, en el caso de los interceptores HTTP, si tienes varios interceptores y
 ** deseas que todos ellos funcionen, es necesario establecer multi: true para cada
 ** uno de ellos en la configuración de los proveedores. De lo contrario, solo se utilizará
 ** el último interceptor proporcionado.
 */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
