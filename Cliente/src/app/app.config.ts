import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withViewTransitions, } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { InicioServicio } from '../core/services/inicio-servicio';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { errorInterceptor } from '../core/interceptor/error-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // provideZonelessChangeDetection(),
    provideRouter(routes, withViewTransitions()),
    provideHttpClient(withInterceptors([errorInterceptor])),
    provideAppInitializer(async () => {
      try {
        return lastValueFrom(inject(InicioServicio).init());
      } finally {
        const splash = document.getElementById('initial-splash');
        if (splash) {
          splash.remove();
        }
        // console.log('Error en la inicialización de la aplicación:', error);
      }
    })
  ]
};
