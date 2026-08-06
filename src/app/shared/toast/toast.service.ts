import { Injectable, signal } from '@angular/core';

export interface ToastState {
  type: 'success' | 'error';
  message: string;
}

/** Minimal signal-based toast - nothing like it existed in this project yet. One toast at a time is enough for this site's needs (form feedback only). */
@Injectable({ providedIn: 'root' })
export class ToastService {
  readonly toast = signal<ToastState | null>(null);
  private dismissTimer?: ReturnType<typeof setTimeout>;

  success(message: string): void {
    this.show({ type: 'success', message });
  }

  error(message: string): void {
    this.show({ type: 'error', message });
  }

  dismiss(): void {
    clearTimeout(this.dismissTimer);
    this.toast.set(null);
  }

  private show(state: ToastState): void {
    clearTimeout(this.dismissTimer);
    this.toast.set(state);
    this.dismissTimer = setTimeout(() => this.toast.set(null), 6000);
  }
}
