import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule, IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly year = new Date().getFullYear();

  newsletterEmail = '';

  subscribe(): void {
    const email = this.newsletterEmail.trim();
    const body = email ? `Please subscribe this email to product updates: ${email}` : 'Please subscribe me to product updates.';
    window.location.href = `mailto:info@careownitsolutions.com?subject=Newsletter%20Subscription&body=${encodeURIComponent(body)}`;
  }
}
