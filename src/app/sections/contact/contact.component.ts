import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, IconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name = '';
  email = '';
  hospital = '';
  message = '';

  submit(): void {
    const subject = `Demo Request${this.hospital ? ' - ' + this.hospital : ''}`;
    const bodyLines = [
      `Name: ${this.name}`,
      `Email: ${this.email}`,
      `Hospital: ${this.hospital}`,
      '',
      this.message || '(No additional message)'
    ];
    const mailto = `mailto:info@careownitsolutions.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
    window.location.href = mailto;
  }
}
