import { Component, inject, signal } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { apiErro } from '../../../Types/error';


@Component({
  selector: 'app-error-servidor',
  imports: [],
  templateUrl: './error-servidor.html',
  styleUrl: './error-servidor.css',
})
export class ErrorServidor {
protected error = signal<apiErro | null>(null);
  private router = inject(Router)
protected showDetails = false;
constructor() {
  this.error.set(history.state?.error ?? null);
}
  // private ubicacion = inject(Location)

  // regresar(){
  //   this.ubicacion.back();
  //   console.log(Location)
  // }

  regresarServidor(){
    this.showDetails = !this.showDetails;
  }
}
