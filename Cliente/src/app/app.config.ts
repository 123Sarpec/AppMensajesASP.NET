import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withViewTransitions, } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { InicioServicio } from '../core/services/inicio-servicio';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // provideZonelessChangeDetection(),
    provideRouter(routes, withViewTransitions()),
    provideHttpClient(),
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
