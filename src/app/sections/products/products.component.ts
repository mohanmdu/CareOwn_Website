import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';

interface ProductTile {
  icon: string;
  title: string;
  body?: string;
  size: 'big' | 'card';
  fill?: 'teal' | 'blue';
  iconClass?: string;
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
      size: 'big',
      fill: 'teal'
    },
    { icon: 'stetho', title: 'Clinic Management', size: 'card', iconClass: 'ic-teal' },
    { icon: 'flask', title: 'Laboratory Management', size: 'card', iconClass: 'ic-blue' },
    { icon: 'pill', title: 'Pharmacy Management', size: 'card', iconClass: 'ic-amber' },
    { icon: 'clock', title: 'Queue Management', size: 'card', iconClass: 'ic-slate' },
    { icon: 'calendar', title: 'Online Appointment', size: 'card', iconClass: 'ic-teal' },
    {
      icon: 'globe',
      title: 'Website CMS & AI Solutions',
      body: 'Your public hospital website, patient booking, and AI-assisted workflows — managed in one place.',
      size: 'big',
      fill: 'blue'
    },
    { icon: 'smartphone', title: 'Mobile App', size: 'card', iconClass: 'ic-blue' },
    { icon: 'sparkle', title: 'AI Healthcare Solutions', size: 'card', iconClass: 'ic-amber' }
  ];
}
