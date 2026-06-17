import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-miembros',
  imports: [],
  standalone: true,
  templateUrl: './lista-miembros.html',
  styleUrl: './lista-miembros.css',
})
export class ListaMiembros {
   constructor(){
     console.log('Mostrando lista de miembros');
   }
}
