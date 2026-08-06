import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { IconComponent } from '../../shared/icon/icon.component';
import { ToastService } from '../../shared/toast/toast.service';
import { ContactService } from '../../core/contact.service';
import { RecaptchaWidgetComponent } from '../../shared/recaptcha/recaptcha-widget.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, IconComponent, RecaptchaWidgetComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);
  private readonly toast = inject(ToastService);

  readonly submitting = signal(false);
  readonly recaptchaEnabled = environment.recaptchaEnabled;
  private recaptchaToken = '';

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(150)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
    hospitalName: ['', [Validators.required, Validators.maxLength(200)]],
    message: ['', [Validators.maxLength(4000)]]
  });

  onRecaptchaToken(token: string): void {
    this.recaptchaToken = token;
  }

  fieldInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  submit(): void {
    if (this.submitting()) {
      return;
    }
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (this.recaptchaEnabled && !this.recaptchaToken) {
      this.toast.error('Please complete the reCAPTCHA check before submitting.');
      return;
    }

    this.submitting.set(true);
    const value = this.form.getRawValue();
    this.contactService
      .submitDemoRequest({
        name: value.name!.trim(),
        email: value.email!.trim(),
        hospitalName: value.hospitalName!.trim(),
        message: value.message?.trim() ?? '',
        recaptchaToken: this.recaptchaToken || undefined
      })
      .subscribe({
        next: (response) => {
          this.submitting.set(false);
          this.toast.success(response.message || "Thanks! We've received your request.");
          this.form.reset();
          this.recaptchaToken = '';
        },
        error: (err: HttpErrorResponse) => {
          this.submitting.set(false);
          const message =
            err.error && typeof err.error.message === 'string'
              ? err.error.message
              : 'Something went wrong. Please try again in a moment.';
          this.toast.error(message);
        }
      });
  }
}
