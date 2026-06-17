import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastServicio {
  constructor() {
    // instancir el contenedor del toast
    this.crearcontenedortoast();
  }
  private crearcontenedortoast() {
    if (!document.getElementById('toast-container')) {
      const contenedor = document.createElement('div');
      contenedor.id = 'toast-container';
      contenedor.className = 'toast toast-bottom toast-end';
      document.body.appendChild(contenedor);
    }
  }

  private mostrarToast(mensage: string, alertClass: string, duration: number = 3000) {
    const contenedor = document.getElementById('toast-container');
    if (!contenedor) return;

    const toast = document.createElement('div');
    toast.classList.add('alert', alertClass, 'shadow-lg');
    toast.innerHTML = `
        <span>${mensage}</span>    `;
    toast.querySelector('button')?.addEventListener('click', () => {
      contenedor.removeChild(toast);
    });
    contenedor.appendChild(toast);

    setTimeout(() => {
      contenedor.removeChild(toast);
    }, duration);
  }
  mostrarExito(mensage: string, duration?: number) {
    this.mostrarToast(mensage, 'alert-success', duration);
  }
  mostrarError(mensage: string, duration?: number) {
    this.mostrarToast(mensage, 'alert-error', duration);
  }
  mostrarInfo(mensage: string, duration?: number) {
    this.mostrarToast(mensage, 'alert-info', duration);
  }
  mostrarAdvertencia(mensage: string, duration?: number) {
    this.mostrarToast(mensage, 'alert-warning', duration);
  }
}
