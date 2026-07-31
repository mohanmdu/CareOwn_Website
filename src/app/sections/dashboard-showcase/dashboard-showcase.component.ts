import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-dashboard-showcase',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './dashboard-showcase.component.html',
  styleUrl: './dashboard-showcase.component.scss'
})
export class DashboardShowcaseComponent {}
