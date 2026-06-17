import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { lastValueFrom } from 'rxjs';
import { Nav } from '../layout/nav/nav';
// import { AccountService } from '../core/services/account-service';
// import { Usuario } from '../Types/usuario';
import { Router } from '@angular/router';
// import { inject, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [Nav, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  // private accountService = inject(AccountService);
  protected router = inject(Router);
  // private http = inject(HttpClient);
  // // protected readonly title = signal('AppMensajeCliente');
  // protected title = 'Aplicacion de mensajes';
  // protected Miembros: any;
  // protected Miembros = signal<Usuario[]>([])

  // async ngOnInit() {
  //   // this.http.get('http://localhost:5103/api/Miembros').subscribe({
  //   //   next: response => this.Miembros.set(response),
  //   // this.Miembros.set(await this.getMiembros());
  //   //   error: err => console.log(err),
  //   //   complete: () => console.log('complete')
  //   // });
  //   // this.setCurrentUser();
  //   // this.Miembros.set(await this.getMiembros)
  //   // this.setCurrentUser();
  // }
  /*peroszonalizar para que no se cierra la sesion al actualizar la pagina */
  // setCurrentUser() {
  //   const usuarioString = localStorage.getItem('usuario');
  //   if (!usuarioString) return
  //   const usuario = JSON.parse(usuarioString);
  //   this.accountService.usuarioActual.set(usuario);
  // }
  // async getMiembros() {
  //   try {
  //     return lastValueFrom(this.http.get<Usuario[]>('https://localhost:5103/api/Miembros'));
  //   } catch (error) {
  //     console.log(error);
  //     return [];
  //   }
  // }

  // constructor( private http: HttpClient) {
  //   // this.title.set('Api de mensajes');
  // }
}
