import { Component, inject } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { ToastService } from './toast.service';

/** Mounted once, at the app root (see app.component.html) - reads ToastService's signal directly, no @Input needed. */
@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  private readonly toastService = inject(ToastService);
  readonly toast = this.toastService.toast;

  dismiss(): void {
    this.toastService.dismiss();
  }
}
