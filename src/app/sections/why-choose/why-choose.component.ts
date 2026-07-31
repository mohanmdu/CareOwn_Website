import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';

const COLORS = ['#0f766e', '#3b82f6', '#14b8a6', '#f59e0b', '#475569'];

@Component({
  selector: 'app-why-choose',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './why-choose.component.html',
  styleUrl: './why-choose.component.scss'
})
export class WhyChooseComponent {
  readonly items = [
    { icon: 'sparkle', title: 'AI-Powered HMS', body: 'Smart assistance built into daily workflows' },
    { icon: 'cloud', title: 'Cloud Ready', body: 'Deploy on your infrastructure or ours' },
    { icon: 'qr', title: 'QR Appointment', body: 'Scan and book in seconds' },
    { icon: 'clock', title: 'Token Queue', body: 'Live waiting-room display boards' },
    { icon: 'whatsapp', title: 'WhatsApp Integration', body: 'Reports and reminders, sent where patients read them' },
    { icon: 'shield', title: 'Secure & Scalable', body: 'Role-based access, full audit trails' },
    { icon: 'building', title: 'Multi-Branch', body: 'One login, every branch' },
    { icon: 'layers', title: 'Multi-Tenant', body: 'Built to serve many hospitals from one codebase' },
    { icon: 'headset', title: '24×7 Support', body: 'Real people, whenever you need them' },
    { icon: 'tag', title: 'Affordable Pricing', body: 'Tiered plans that grow with your hospital' }
  ];

  colorFor(index: number): string {
    return COLORS[index % COLORS.length];
  }
}
