import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly highlights = [
    {
      icon: 'layers',
      title: 'One connected platform',
      body: 'Registration, queue, billing, pharmacy, lab and your public website share one patient record — not a bundle of disconnected tools.'
    },
    {
      icon: 'stetho',
      title: 'Built from real hospital workflows',
      body: 'Every module is shaped by how a front desk, a cashier, and a doctor actually work day to day — not a generic template.'
    },
    {
      icon: 'box',
      title: 'Modular licensing',
      body: 'Start with Starter, grow into Professional or Enterprise — a hospital never loses a module it already has.'
    }
  ];
}
