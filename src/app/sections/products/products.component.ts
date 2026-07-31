import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';

interface ProductTile {
  icon: string;
  title: string;
  body: string;
  layout: 'tall' | 'wide' | 'card';
  tone: 'teal' | 'blue' | 'amber' | 'violet';
  cta?: string;
  href?: string;
  illustration?: 'hms' | 'cms';
}

interface TrustPoint {
  icon: string;
  title: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  readonly tiles: ProductTile[] = [
    {
      icon: 'heart-pulse',
      title: 'Hospital Management System',
      body: 'Registration, OP/IP, billing, pharmacy, lab — one connected record end to end.',
      layout: 'tall',
      tone: 'teal',
      cta: 'Explore HMS',
      href: '#modules',
      illustration: 'hms'
    },
    {
      icon: 'stetho',
      title: 'Clinic Management',
      body: 'Manage doctors, patients, consultations and OP workflow seamlessly.',
      layout: 'card',
      tone: 'teal'
    },
    {
      icon: 'flask',
      title: 'Laboratory Management',
      body: 'Complete lab workflow from sample collection to accurate reports.',
      layout: 'card',
      tone: 'blue'
    },
    {
      icon: 'pill',
      title: 'Pharmacy Management',
      body: 'Inventory, purchase, sales, expiry alerts and stock management.',
      layout: 'card',
      tone: 'amber'
    },
    {
      icon: 'users',
      title: 'Queue Management',
      body: 'Smart token, real-time queue display & efficient patient flow management.',
      layout: 'card',
      tone: 'violet'
    },
    {
      icon: 'calendar',
      title: 'Online Appointment',
      body: 'Book appointments online, reduce wait time and improve patient experience.',
      layout: 'card',
      tone: 'teal'
    },
    {
      icon: 'smartphone',
      title: 'Mobile App',
      body: 'Doctor, patient and admin apps for smarter healthcare on the go.',
      layout: 'card',
      tone: 'blue'
    },
    {
      icon: 'globe',
      title: 'Website CMS & AI Solutions',
      body: 'Your hospital website, patient booking, and AI-assisted workflows — managed in one place.',
      layout: 'wide',
      tone: 'violet',
      cta: 'Explore Solutions',
      href: '#ai-features',
      illustration: 'cms'
    }
  ];

  readonly trust: TrustPoint[] = [
    { icon: 'shield', title: 'Secure & Reliable' },
    { icon: 'cloud', title: 'Cloud Ready' },
    { icon: 'rocket', title: 'High Performance' },
    { icon: 'headset', title: '24/7 Support' }
  ];
}
