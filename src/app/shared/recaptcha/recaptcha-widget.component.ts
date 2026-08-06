import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';

declare global {
  interface Window {
    grecaptcha?: {
      render: (
        container: HTMLElement,
        params: { sitekey: string; callback: (token: string) => void; 'expired-callback'?: () => void }
      ) => void;
    };
    onRecaptchaApiLoad?: () => void;
  }
}

const SCRIPT_ID = 'recaptcha-api-script';

/**
 * Renders Google's reCAPTCHA v2 checkbox - only does anything when
 * environment.recaptchaEnabled is true (see environment.ts / the matching
 * backend flag in RecaptchaVerificationService). Ships disabled, so this
 * component is present but inert until a site key is configured.
 */
@Component({
  selector: 'app-recaptcha-widget',
  standalone: true,
  template: `@if (enabled) {
    <div #container class="recaptcha-container"></div>
  }`
})
export class RecaptchaWidgetComponent implements OnInit {
  @ViewChild('container') containerRef?: ElementRef<HTMLElement>;
  @Output() tokenChange = new EventEmitter<string>();

  readonly enabled = environment.recaptchaEnabled;

  ngOnInit(): void {
    if (!this.enabled) {
      return;
    }
    this.loadScript().then(() => this.render());
  }

  private render(): void {
    if (!this.containerRef || !window.grecaptcha) {
      return;
    }
    window.grecaptcha.render(this.containerRef.nativeElement, {
      sitekey: environment.recaptchaSiteKey,
      callback: (token: string) => this.tokenChange.emit(token),
      'expired-callback': () => this.tokenChange.emit('')
    });
  }

  private loadScript(): Promise<void> {
    if (window.grecaptcha) {
      return Promise.resolve();
    }
    if (document.getElementById(SCRIPT_ID)) {
      return new Promise((resolve) => {
        const check = setInterval(() => {
          if (window.grecaptcha) {
            clearInterval(check);
            resolve();
          }
        }, 100);
      });
    }
    return new Promise((resolve) => {
      window.onRecaptchaApiLoad = () => resolve();
      const script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = 'https://www.google.com/recaptcha/api.js?onload=onRecaptchaApiLoad&render=explicit';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    });
  }
}
