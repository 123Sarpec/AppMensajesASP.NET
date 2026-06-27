import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-no-encontrado',
  standalone: true,
  imports: [],
  templateUrl: './no-encontrado.html',
  styleUrl: './no-encontrado.css',
})
export class NoEncontrado {
  private ubicacion = inject(Location)

  regresar(){
    this.ubicacion.back();
    console.log(Location)
  }
}
