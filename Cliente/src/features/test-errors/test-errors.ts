import { Component, inject } from '@angular/core';
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

  // instanciamos el errror de la respuesta 
  get404Eror(){
    this.http.get(this.baseUrl + 'buggy/pagina-no-encotrada').subscribe ({
      next: Response => console.log(Response),
      error: error => console.log(error)
    })
  }
}
