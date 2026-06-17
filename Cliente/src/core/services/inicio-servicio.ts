import { inject, Injectable } from '@angular/core';
import { AccountService } from './account-service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InicioServicio {
  private accountService = inject(AccountService);

  init() {
    const usuarioString = localStorage.getItem('usuario');
    if (!usuarioString) return of(null);
    const usuario = JSON.parse(usuarioString);
    this.accountService.usuarioActual.set(usuario);

    return of(null);
  }
}
