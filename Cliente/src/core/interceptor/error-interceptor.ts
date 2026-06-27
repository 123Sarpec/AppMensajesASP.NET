import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError } from 'rxjs';
import { ToastServicio } from '../services/toast-servicio';
import { Router } from '@angular/router';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject (ToastServicio);
  const router = inject (Router);
  return next(req).pipe(
catchError(error => {
  if (error ) {
    switch (error.status) {
      case 400:
        // toast.mostrarError(error.error)
        if (error.error.errors) {
          const modelStateErrors = [];
          for (const key in error.error.errors) {
            if (error.error.errors[key]) {
              modelStateErrors.push(error.error.errors[key]);
            }
          }
            throw modelStateErrors.flat()
          
        } else {
          toast.mostrarError(error.error + '' + error.status)
        }
        break;
      case 401:
        toast.mostrarError('Unauthorized')  
        break;
      case 404:
      toast.mostrarError('No encontrado')
        break;
      case 500:
        toast.mostrarError('Error en el servidor')
        break;
        case 403:
        // toast.mostrarError('Error en el servidor')
        break;
      default:
        toast.mostrarError('Algo salio mal.')
        break    
    }
  }

  throw error;
})
)
};
