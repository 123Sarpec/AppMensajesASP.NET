import { Component, inject, input, output } from '@angular/core';
import { LoginRegistrar, Usuario } from '../../../Types/usuario';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../../core/services/account-service';


@Component({
  selector: 'app-registrar',
  imports: [FormsModule],
  templateUrl: './registrar.html',
  styleUrl: './registrar.css',
})
export class Registrar {
  private accountService = inject(AccountService);
  // MiembrosFormsHome = input.required<Usuario[]>();
  cancelarRegistro = output<boolean>();  
  protected credenciales = { } as LoginRegistrar;

  registrar() {
    // console.log(this.credenciales);
    this.accountService.registrar(this.credenciales).subscribe({
      next: response => {
        console.log(response);
        this.cancelar();
      },
      error: error => {
        console.log(error);
      }
    })  
  }

  cancelar() {
    this.cancelarRegistro.emit(false);
    console.log('cancelado.......');
  }
}
