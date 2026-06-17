import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginCredenciales, LoginRegistrar, Usuario } from '../../Types/usuario';
import { tap } from 'rxjs';
// import { Registrar } from '../../features/account/registrar/registrar';
// import { inject, signal,  } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private http = inject(HttpClient);
  usuarioActual = signal<Usuario | null>(null);

  constructor() {
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString) {
      const usuario = JSON.parse(usuarioString);
      this.usuarioActual.set(usuario);
    }
  }


  baseUrl = 'https://localhost:5103/api/';

  /*INYECAR EL REGISTRO DEL USUAIRO */
  registrar(credenciales: LoginRegistrar) {
    return this.http.post<Usuario>(this.baseUrl + 'CrearCuenta/registrar', credenciales).pipe(
      tap(usuario => {
        if (usuario) {
          localStorage.setItem('usuario', JSON.stringify(usuario));
          this.usuarioActual.set(usuario);
          // console.log(usuario);
        }
      })
    )
  }


  login(credenciales: LoginCredenciales) {
    return this.http.post<Usuario>(
      this.baseUrl + 'CrearCuenta/login',
      credenciales
    ).pipe(
      tap(usuario => {
        if (usuario) {
          localStorage.setItem('usuario', JSON.stringify(usuario));
          this.usuarioActual.set(usuario);
          // console.log(usuario);
        }
      })

    )
  }

  /*LLAMAR EL METODO USARIO ACTUAL PARA VERIFCAR LA CREACION DE CUENTE E INICIAR SESION*/
  usaurioActual(usuario: Usuario) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.usuarioActual.set(usuario);
  }
  logout() {
    localStorage.removeItem('usuario');
    this.usuarioActual.set(null);
  }
}
