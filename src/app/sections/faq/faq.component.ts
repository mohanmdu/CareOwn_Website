import { Component, signal } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  readonly openIndex = signal<number | null>(0);

  readonly items = [
    {
      q: 'Is CareOwn HMS cloud-based or on-premise?',
      a: 'Both. CareOwn HMS can be deployed on your own infrastructure or hosted for you — whichever fits your hospital’s IT policy.'
    },
    {
      q: 'Can we start small and upgrade later?',
      a: 'Yes. Starter, Professional, and Enterprise are additive — upgrading never takes away a module you already have.'
    },
    {
      q: 'How is patient data kept secure?',
      a: 'Role-based access is enforced down to individual pages, and every registration, billing, and master-data action is logged for audit.'
    },
    {
      q: 'Do you support multiple hospital branches?',
      a: 'Yes — CareOwn HMS is built for multi-branch and multi-tenant deployments from a single, shared platform.'
    },
    {
      q: 'How long does implementation take?',
      a: 'It depends on hospital size and data migration scope — see the "From First Call to Go-Live" timeline above for the typical stages.'
    },
    {
      q: 'Do you provide staff training?',
      a: 'Yes. Training for front-desk, billing, and clinical staff is part of every onboarding, not a paid add-on.'
    }
  ];

  toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
