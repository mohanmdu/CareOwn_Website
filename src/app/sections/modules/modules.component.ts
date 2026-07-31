import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';

const MODULE_COLORS = ['#0f766e', '#3b82f6', '#f59e0b', '#475569', '#14b8a6'];

@Component({
  selector: 'app-modules',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './modules.component.html',
  styleUrl: './modules.component.scss'
})
export class ModulesComponent {
  readonly modules = [
    { icon: 'stetho', label: 'OP' },
    { icon: 'bed', label: 'IP' },
    { icon: 'receipt', label: 'Billing' },
    { icon: 'pill', label: 'Pharmacy' },
    { icon: 'flask', label: 'Laboratory' },
    { icon: 'shield', label: 'Insurance' },
    { icon: 'box', label: 'Inventory' },
    { icon: 'id-card', label: 'HR & Payroll' },
    { icon: 'clipboard', label: 'EMR / EHR' },
    { icon: 'heart-pulse', label: 'ICU' },
    { icon: 'ot-light', label: 'OT' },
    { icon: 'scan', label: 'Radiology' },
    { icon: 'droplet', label: 'Blood Bank' },
    { icon: 'chart-bar', label: 'Reports' },
    { icon: 'grid', label: 'Dashboard' }
  ];

  colorFor(index: number): string {
    return MODULE_COLORS[index % MODULE_COLORS.length];
  }
}
