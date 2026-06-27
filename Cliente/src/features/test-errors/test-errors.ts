import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-test-errors',
  imports: [],
  templateUrl: './test-errors.html',
  styleUrl: './test-errors.css',
})
export class TestErrors {
  private http = inject(HttpClient);
  baseUrl = 'https://localhost:5103/api/'
  validarError = signal<string[]>([]);

  // instanciamos el errror de la respuesta 
  //   get404Error(){
  //   this.http.get(this.baseUrl + 'error/a').subscribe ({
  //     next: Response => console.log(Response),
  //     error: error => console.log(error)
  //   })
  // }
  get404Error(){
    this.http.get(this.baseUrl + 'error/Error_Verificacion').subscribe ({
      next: Response => console.log(Response),
      error: error => console.log(error)
    })
  }

  //   get500Error(){
  //   this.http.get(this.baseUrl + 'error/Error_servidor').subscribe ({
  //     next: Response => console.log(Response),
  //     error: error => console.log(error)
  //   })
  // }

  get400Error(){
    this.http.get(this.baseUrl + 'error/Respuesta_incorrecta').subscribe ({
      next: Response => console.log(Response),
      error: error => console.log(error)
    })
  }
  get500Error(){
    this.http.get(this.baseUrl + 'error/Error_servidor').subscribe ({
      next: Response => console.log(Response),
      error: error => console.log(error)
    })
  }
   get401Error(){
    this.http.get(this.baseUrl + 'error/auth').subscribe ({
      next: Response => console.log(Response),
      error: error => console.log(error)
    })
  }

get400ValidarError() {
  this.http.post(this.baseUrl + 'CrearCuenta/registrar', {
    nombre: '',
    email: '',
    password: ''
  }).subscribe({
    next: response => console.log(response),
    error: error => {
      console.log(error);
      this.validarError.set(error);
    }
  });
}

}
