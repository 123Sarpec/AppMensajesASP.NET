import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastServicio } from '../../core/services/toast-servicio';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  /*INYECTACTMOS EL ARCHIVO DE ACCOUNT */
  protected accountService = inject(AccountService);
  protected credenciales: any = {}
  private router = inject(Router);
  private toastMensaje = inject(ToastServicio);
  /*mostratmos el inicio de sesion con exito*/
  // protected loggeIn = signal(false);

  login() {
    this.accountService.login(this.credenciales).subscribe({
      next: () => {
        // console.log(result);
        this.router.navigateByUrl('/miembros');
        // this.loggeIn.set(true);
        this.credenciales = {};
        this.toastMensaje.mostrarExito('Inicio de sesión exitoso. ¡Bienvenido de nuevo!');
      },
      // error: error => console.log(error)
      error: error => {
        this.toastMensaje.mostrarError('Error al iniciar sesión. Verifica tus credenciales e intenta nuevamente.');
      }
    });
  }
  logout() {
    // this.loggeIn.set(false);
    this.accountService.logout();
    this.toastMensaje.mostrarInfo('Has cerrado sesión. ¡Hasta luego!');
    /*salir del perfil y volver al inicio */
    this.router.navigateByUrl('/');
  }
}

