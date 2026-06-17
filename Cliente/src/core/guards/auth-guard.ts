import { inject } from '@angular/core/primitives/di';
import { CanActivateFn } from '@angular/router';
import { ToastServicio } from '../services/toast-servicio';
import { AccountService } from '../services/account-service';

export const authGuard: CanActivateFn = () => {
  // return true;
  const acountService = inject(AccountService);
  const toastService = inject(ToastServicio);

  if (acountService.usuarioActual()) {
    return true;
  } else {
    toastService.mostrarError('Debes iniciar sesión para acceder a esta página.');
    return false;
  }
};
