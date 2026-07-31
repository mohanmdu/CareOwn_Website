import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';

interface PricingTier {
  name: string;
  tagline: string;
  features: string[];
  popular?: boolean;
  ctaLabel: string;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  readonly tiers: PricingTier[] = [
    {
      name: 'Starter',
      tagline: 'For a single clinic getting started',
      features: ['Registration & Appointments', 'Doctor Queue add-on', 'Masters & Administration'],
      ctaLabel: 'Get Started'
    },
    {
      name: 'Professional',
      tagline: 'For a growing outpatient practice',
      features: ['Everything in Starter', 'Lab, Pharmacy & ICD Codes', 'Upload Reports'],
      popular: true,
      ctaLabel: 'Get Started'
    },
    {
      name: 'Enterprise',
      tagline: 'For a full multi-specialty hospital',
      features: ['Everything in Professional', 'IP Admission, Cashier, Insurance', 'Website CMS & CEO Dashboard'],
      ctaLabel: 'Talk to Sales'
    },
    {
      name: 'Custom',
      tagline: 'For multi-branch & multi-tenant networks',
      features: ['Everything in Enterprise', 'Custom integrations', 'Dedicated onboarding & support'],
      ctaLabel: 'Contact Us'
    }
  ];
}
