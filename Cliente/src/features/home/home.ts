import { Component, Input, signal } from '@angular/core';
import { Registrar } from '../account/registrar/registrar';
import { Usuario } from '../../Types/usuario';

@Component({
  selector: 'app-home',
  imports: [ Registrar],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  // @Input({required: true }) MiembrosFormsApp: Usuario[] = [];
  protected modoRegistro = signal(false);

  mostrarRegistro(value: boolean) {
    this.modoRegistro.set(value);
    // this.modoRegistro.set(true);
  }

  // cancelarRegistro(value: boolean) {
  //   this.modoRegistro.set(value);
  // }

}