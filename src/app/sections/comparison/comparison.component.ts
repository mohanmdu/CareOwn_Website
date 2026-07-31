import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-comparison',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './comparison.component.html',
  styleUrl: './comparison.component.scss'
})
export class ComparisonComponent {
  readonly rows = [
    { label: 'Patient Queue', traditional: 'Manual token boards, calling out names', careown: 'Live digital display board, updates in real time' },
    { label: 'Billing Handoff', traditional: 'Re-entered by hand between departments', careown: 'Automatic handoff from consultation to billing' },
    { label: 'Patient Records', traditional: 'Paper files or siloed systems', careown: 'One connected OP/IP record' },
    { label: 'Website & Booking', traditional: 'Static site, phone-only booking', careown: 'CMS-driven site with no-login online booking' },
    { label: 'Reporting', traditional: 'End-of-day manual compilation', careown: 'Real-time collection & activity reports' },
    { label: 'Licensing', traditional: 'One-size-fits-all, pay for everything', careown: 'Modular tiers — pay for what you need' },
    { label: 'Access Control', traditional: 'Shared logins, no audit trail', careown: 'Role-based access with full audit logs' }
  ];
}
