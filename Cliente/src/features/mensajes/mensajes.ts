import { Component } from '@angular/core';

@Component({
  selector: 'app-mensajes',
  imports: [],
  templateUrl: './mensajes.html',
  styleUrl: './mensajes.css',
})
export class Mensajes {
  constructor(){
    console.log('Mostrando mensajes');
  }
}
